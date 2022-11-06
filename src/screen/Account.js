import React, { Component, useEffect, useState } from "react";
import { Button, Input, ListItem, Text, Avatar } from "react-native-elements";
import {
  StyleSheet,
  Dimensions,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment";
import "moment/locale/vi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";

import CheckAuth from "../component/CheckAuth";
import Logout from "../api/auth/Logout";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Account = ({ navigation }) => {
  const [dataUser, setDataUser] = useState({});
  useEffect(() => {
    CheckAuth().then((data) => {
      if (data == -1) {
        navigation.navigate("Login");
      } else {
        setDataUser(data);
      }
    });
  }, []);

  const logout = async () => {
    const fcmtoken = await messaging().getToken();
    Logout(dataUser.remember_token, fcmtoken).then((dt) => {
      if (dt.status === true) {
        okLogout();
      }
    });
  };

  const okLogout = async () => {
    try {
      await AsyncStorage.removeItem("user");
    } catch (e) {
      console.log(e);
    }
    setDataUser(-1);
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../lib/img/background.png")}
        style={{ width: width, height: height }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: width,
              height: 220,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              rounded
              size="xlarge"
              containerStyle={{
                borderColor: "gray",
                borderWidth: 1,
                shadowOpacity: 1,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "#0d87dc",
              }}
              source={{
                uri: "https://i.pinimg.com/originals/0d/36/e7/0d36e7a476b06333d9fe9960572b66b9.jpg",
              }}
            >
              <Avatar.Accessory size={36} />
            </Avatar>
            <Text h4 h4Style={{ fontWeight: "bold", marginTop: 10 }}>
              {dataUser.name}{" "}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <ListItem bottomDivider>
              <Icon name="account" size={24} />
              <ListItem.Content>
                <ListItem.Title numberOfLines={1}>
                  {dataUser.email}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <Icon name="clock-time-five" size={24} />
              <ListItem.Content>
                <ListItem.Title>
                  Tham gia {moment(dataUser.created_at).fromNow()}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
            <ListItem
              bottomDivider
              onPress={() =>
                navigation.navigate("TabBottom", { screen: "Lịch sử" })
              }
            >
              <Icon name="eye" size={24} />
              <ListItem.Content>
                <ListItem.Title>Xem lịch sử</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            <ListItem bottomDivider>
              <Icon name="key-change" size={24} />
              <ListItem.Content>
                <ListItem.Title>Đổi mật khẩu</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            <ListItem bottomDivider onPress={() => logout()}>
              <Icon name="logout" size={24} />
              <ListItem.Content>
                <ListItem.Title>Đăng xuất</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Account;
