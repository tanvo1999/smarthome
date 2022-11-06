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
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Tooltip from "rn-tooltip";

import GetNotification from "../api/noti/GetNotification";
import CheckAuth from '../component/CheckAuth';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Notification = ({ navigation }) => {
  const [listNoti, setListNoti] = useState({});
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

  useEffect(() => {
    GetNotification(dataUser.remember_token).then((data) => {
      console.log(data)
      if(data.status == true) {
        setListNoti(data.notification.data);
      } else {
        Alert.alert(
          "Thông báo",
          "Có lỗi xảy ra vui lòng thử lại sau!",
          [
              { text: "Đóng" }
          ],
      );
      }
    });
  }, [dataUser]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../lib/img/background.png")}
        style={{ width: width, height: height }}
      >
        <ScrollView>
          {listNoti.length > 0 && listNoti.map((l, i) => (
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
            
          ))}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Notification;
