/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";
import { StyleSheet, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import SplashScreen from "react-native-splash-screen";
import "react-native-gesture-handler";
import messaging from "@react-native-firebase/messaging";
import notifee, { AndroidColor } from "@notifee/react-native";

import DrawerNavigator from "./src/screen/DrawerNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./src/screen/StackNavigator";

const App = () => {
  SplashScreen.hide();
  const isDarkMode = useColorScheme() === "dark";

  async function onDisplayNotification(mess) {
    // Create a channel
    const channelId = await notifee.createChannel({
      id: "default",
      name: "Miscellaneous",
      sound: "hollow",
      lights: true,
      lightColor: AndroidColor.GREEN,
    });

    // Display a notification
    await notifee.displayNotification({
      title: mess.notification.title,
      body: mess.notification.body,
      data: mess.data,
      android: {
        channelId,
        timestamp: Date.now(),
        showTimestamp: true,
      },
    });
  }

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      onDisplayNotification(remoteMessage);
    });

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {});

    return unsubscribe;
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <StackNavigator />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
