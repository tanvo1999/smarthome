// In App.js in a new project

import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { enableScreens } from "react-native-screens";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  useIsFocused,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import messaging from "@react-native-firebase/messaging";

import HomeScreen from "../component/Home";
import DetailScreen from "../screen/Detail";
import Login from "./Login";
import SettingScreen from "../screen/Setting";
import TabBottom from "./TabBottom";
import Logo from "../lib/img/logo.png";
import DrawerNavigator from "./DrawerNavigation";
const width = Dimensions.get("window").width;
const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image style={{ width: 120, height: 50, marginLeft: 4 }} source={Logo} />
  );
}

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (
    routeName == "Trang chủ" ||
    routeName == "Tài khoản" ||
    typeof routeName == "undefined"
  ) {
    return -1;
  }
  return routeName;
}

const StackNavigator = ({ navigation }) => {
  const [initialRoute, setInitialRoute] = useState("Login");

  useEffect(() => {
    messaging().onNotificationOpenedApp((remoteMessage) => {});

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          setInitialRoute(remoteMessage.data.type);
        }
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0d87dc",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            flexDirection: "row",
            alignContent: "flex-start",
          },
        }}
      >
        <Stack.Screen
          name="TabBottom"
          component={TabBottom}
          initialParams="Trang chủ"
          options={({ navigation, route }) => ({
            headerTitle:
              getHeaderTitle(route) == -1 ? false : getHeaderTitle(route),
            headerLeft: (props) =>
              getHeaderTitle(route) == -1 ? <LogoTitle {...props} /> : null,
          })}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: false,
            headerLeft: (props) => <LogoTitle {...props} />,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: "Trang chi tiết",
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation, route }) => ({
            headerBackTitleVisible: false,
            headerTitle: false,
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="TaiKhoan"
          component={SettingScreen}
          options={{
            title: "Tài khoản",
          }}
        />
        <Stack.Screen
          name="DanhMuc"
          component={SettingScreen}
          options={{
            title: "Danh mục",
          }}
        />
        <Stack.Screen
          name="TacGia"
          component={SettingScreen}
          options={{
            title: "Tác giả",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
