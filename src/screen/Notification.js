import React, { Component, useEffect, useState } from "react";
import { Button, Input, ListItem, Text } from "react-native-elements";
import {
  StyleSheet,
  Dimensions,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Alert,
  RefreshControl,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Tooltip from "rn-tooltip";

import GetNotification from "../api/noti/GetNotification";
import CheckAuth from "../component/CheckAuth";
import Loading from "../component/Loading";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Notification = ({ navigation }) => {
  const [listNoti, setListNoti] = useState({});
  const [dataUser, setDataUser] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const refresh = () => {
    setLoading(true);
    setRefreshing(false);
    getData(dataUser.remember_token);
  };

  useEffect(() => {
    CheckAuth().then((data) => {
      if (data == -1) {
        navigation.navigate("Login");
      } else {
        setDataUser(data);
        getData(data.remember_token);
      }
    });
  }, []);

  const getData = (remember_token) => {
    GetNotification(remember_token).then((data) => {
      if (data.status == true) {
        setListNoti(data.notification.data);
        setLoading(false);
      } else {
        setLoading(true);
        Alert.alert("Thông báo", "Có lỗi xảy ra vui lòng thử lại sau!", [
          { text: "Đóng" },
        ]);
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../lib/img/background.png")}
        style={{ width: width, height: height }}
      >
        {!loading ? (
          <ScrollView
            refreshControl={
              <RefreshControl onRefresh={refresh} refreshing={refreshing} />
            }
          >
            {listNoti.length > 0 ? (
              listNoti.map((l, i) => (
                <ListItem key={i} bottomDivider onPress={() => console.log(1)}>
                  <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: "bold" }}>
                      {l.title}
                    </ListItem.Title>
                    <ListItem.Subtitle style={{ color: "gray" }}>
                      {l.message}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            ) : (
              <View>
                <Text style={styles.txtNoti}>Không có thông báo !</Text>
              </View>
            )}
          </ScrollView>
        ) : (
          <Loading />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  txtNoti: {
    textAlign: "center",
    marginTop: height * 0.4,
    fontSize: 20,
  },
});

export default Notification;
