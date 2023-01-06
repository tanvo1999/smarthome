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
import { useIsFocused } from '@react-navigation/native';
import moment from "moment";

import GetHistory from "../api/data/History";
import CheckAuth from "../component/CheckAuth";
import Loading from "../component/Loading";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const History = ({ navigation }) => {
  const [list, setList] = useState([]);
  const [dataUser, setDataUser] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

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
  }, [isFocused]);

  const getData = (remember_token) => {
    GetHistory(remember_token).then((data) => {
      if (data.status == true) {
        setList(data.history);
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
            {list.map((l, i) => (
              <ListItem key={i} bottomDivider onPress={() => console.log(1)}>
                <ListItem.Content>
                  <ListItem.Title style={{ fontWeight: "bold" }}>
                    {l.status}{" "}
                    <Tooltip
                      height={"auto"}
                      popover={
                        <Text>{moment(l.created_at).format("LLLL")}</Text>
                      }
                    >
                      <Icon name="info-circle" size={15} color={"black"} />
                    </Tooltip>
                  </ListItem.Title>
                  <ListItem.Subtitle
                    numberOfLines={1}
                    style={{ color: "gray" }}
                  >
                    {moment(l.created_at).calendar()}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))}
          </ScrollView>
        ) : (
          <Loading />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default History;
