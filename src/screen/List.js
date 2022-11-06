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
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import TouchableScale from "react-native-touchable-scale";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const list = [
  {
    name: "Xem nhiệt độ",
    navigator: "Temperature",
    icon: "temperature-celsius",
  },
  {
    name: "Xem trạng thái cửa",
    navigator: "Door",
    icon: "door",
  },
  {
    name: "Xem nồng độ khí gas",
    navigator: "Gas",
    icon: "fire",
  },
];

const List = ({ navigation }) => {
  const [light, setLight] = useState(1);

  useEffect(() => {}, []);

  const openLight = () => {
    setLight(1-light);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../lib/img/background.png")}
        style={{ width: width, height: height }}
      >
        <ScrollView>
          <View style={{ alignItems: "center", width: width }}>
            {list.map((l, i) => (
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
            ))}
          </View>
          <View style={styles.viewLight}>
            <Icon
              name={light == 1 ? "lightbulb-on-outline" : "lightbulb-outline"}
              size={90}
              color={light == 1 ? "yellow" : "black"}
            />
            <ListItem
              onPress={() => openLight()}
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
  viewLight: {
    width: width,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  btnLight: {
    paddingHorizontal: 28,
    borderWidth: 1,
    paddingVertical: 10,
    backgroundColor: "red",
    marginTop: 20,
  },
});

export default List;
