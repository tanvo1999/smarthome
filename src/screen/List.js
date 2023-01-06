import React, { Component, useEffect, useState } from "react";
import { ListItem } from "react-native-elements";
import {
  StyleSheet,
  Dimensions,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Text,
  Alert,
  RefreshControl,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import TouchableScale from "react-native-touchable-scale";
import { useIsFocused } from '@react-navigation/native';

import DataTemp from "../api/data/Temp";
import DataGas from "../api/data/Gas";
import DataLight from "../api/data/Light";
import TurnOnLight from "../api/control/TurnOnLight";
import TurnOffLight from "../api/control/TurnOffLight";
import CheckAuth from "../component/CheckAuth";
import Loading from "../component/Loading";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const List = ({ navigation }) => {
  const [dataUser, setDataUser] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [light, setLight] = useState(1);
  const [dataList, setDataList] = useState({
    temp: "",
    gas: "",
    rain: 0,
    sound: 0,
  });
  const isFocused = useIsFocused();

  const refresh = () => {
    setLoading(true);
    setRefreshing(false);
    getData(dataUser.remember_token);
  };

  const getData = (remember_token) => {
    DataGas(remember_token).then((data) => {
      if (data.status === "success") {
        setDataList((prevState) => ({
          ...prevState,
          gas: data.data.temp,
        }));
      } else {
        Alert.alert("Lỗi", "Không thể lấy được dữ liệu của khí gas!", [
          { text: "Đóng" },
        ]);
      }
    });
    DataTemp(remember_token).then((data) => {
      if (data.status === "success") {
        setDataList((prevState) => ({
          ...prevState,
          temp: data.data.temp,
        }));
        setLoading(false);
      } else {
        Alert.alert("Lỗi", "Không thể lấy được dữ liệu của khí gas!", [
          { text: "Đóng" },
        ]);
      }
    });
    DataLight(remember_token).then((data) => {
      if (data.status === "success") {
        setLight(data.data.temp);
        setLoading(false);
      } else {
        Alert.alert("Lỗi", "Không thể lấy được dữ liệu của khí gas!", [
          { text: "Đóng" },
        ]);
      }
    });
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

  useEffect(() => {
    const interval = setInterval(() => {
      if(typeof(dataUser.remember_token) !== 'undefined') {
        getData(dataUser.remember_token);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const openLight = (status) => {
    if (status == 1) {
      TurnOffLight(dataUser.remember_token).then((data) => {
        if (data.status == "success") {
          setLight(0);
        } else {
          Alert.alert("Thông báo", "Có lỗi xảy ra, vui lòng thử lại!", [
            { text: "Đóng" },
          ]);
        }
      });
    } else {
      TurnOnLight(dataUser.remember_token).then((data) => {
        if (data.status == "success") {
          setLight(1);
        } else {
          Alert.alert("Thông báo", "Có lỗi xảy ra, vui lòng thử lại!", [
            { text: "Đóng" },
          ]);
        }
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../lib/img/background.png")}
        style={{ width: width, height: height }}
      >
        <ScrollView
          refreshControl={
            <RefreshControl onRefresh={refresh} refreshing={refreshing} />
          }
        >
          <View style={styles.viewTop}>
            {/* {list.map((l, i) => (
              <ListItem
                key={i}
                bottomDivider
                onPress={() => navigation.navigate(l.navigator)}
                Component={TouchableScale}
                friction={90}
                tension={100}
                activeScale={0.85}
                linearGradientProps={{
                  colors: ["#FF9800", "#F44336"],
                  start: { x: 1, y: 0 },
                  end: { x: 0.2, y: 0 },
                }}
                ViewComponent={LinearGradient}
                containerStyle={{
                  marginTop: 22,
                  height: 70,
                  width: "85%",
                  borderRadius: 15,
                }}
              >
                <Icon name={l.icon} color={"#fff"} size={24} />
                <ListItem.Content>
                  <ListItem.Title
                    numberOfLines={1}
                    style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}
                  >
                    {l.name}
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color={"#fff"}></ListItem.Chevron>
              </ListItem>
            ))} */}
            <View style={styles.item}>
              <ImageBackground
                source={require("../lib/img/sky.jpeg")}
                style={styles.itemBG}
                imageStyle={{ opacity: 0.23 }}
              >
                <Text style={styles.txtTitle}>Nhiệt độ</Text>
                <Text style={styles.txtContent}>
                  {dataList.temp}
                  <Icon name="temperature-celsius" size={29} />
                </Text>
              </ImageBackground>
            </View>
            <View style={styles.item}>
              <ImageBackground
                source={require("../lib/img/gas.png")}
                style={styles.itemBG}
                imageStyle={{ opacity: 0.23 }}
              >
                <Text style={styles.txtTitle}>Nồng độ gas</Text>
                <Text style={styles.txtContent}>{dataList.gas}%</Text>
              </ImageBackground>
            </View>
            <View style={styles.item}>
              <ImageBackground
                source={require("../lib/img/loa.jpeg")}
                style={styles.itemBG}
                imageStyle={{ opacity: 0.23 }}
              >
                <Text style={styles.txtTitle}>Độ ồn</Text>
                <Text style={styles.txtContent}>28 dB</Text>
              </ImageBackground>
            </View>
            <View style={styles.item}>
              <ImageBackground
                source={require("../lib/img/rain.jpeg")}
                style={styles.itemBG}
                imageStyle={{ opacity: 0.23 }}
              >
                <Text style={styles.txtTitle}>Lượng mưa</Text>
                <Text style={styles.txtContent}>28%</Text>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.viewLight}>
            <Icon
              name={light == 1 ? "lightbulb-on-outline" : "lightbulb-outline"}
              size={90}
              color={light == 1 ? "yellow" : "black"}
            />
            <ListItem
              onPress={() => openLight(light)}
              Component={TouchableScale}
              friction={90}
              tension={100}
              activeScale={0.85}
              linearGradientProps={{
                colors: ["#659999", "#1565c0"],
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
              }}
              ViewComponent={LinearGradient}
              containerStyle={{
                marginTop: 22,
                height: 70,
                width: width * 0.85,
                borderRadius: 15,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <ListItem.Content>
                <ListItem.Title
                  numberOfLines={1}
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  {light == 1 ? "Tắt đèn" : "Bật đèn"}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewTop: {
    flex: 1,
    width: width,
    paddingHorizontal: 28,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 28,
  },
  viewLight: {
    width: width,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  btnLight: {
    paddingHorizontal: 28,
    borderWidth: 1,
    paddingVertical: 10,
    backgroundColor: "red",
    marginTop: 20,
  },
  item: {
    width: width * 0.5 - 36,
    height: width * 0.5 - 36,
    marginBottom: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#4592df",
  },
  itemBG: {
    width: width * 0.5 - 38,
    height: width * 0.5 - 38,
    borderRadius: 16,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  txtTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  txtContent: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default List;
