/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StyleSheet, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import SplashScreen from "react-native-splash-screen";
import "react-native-gesture-handler";
import DrawerNavigator from "./src/screen/DrawerNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./src/screen/StackNavigator";

const App = () => {
  SplashScreen.hide();
  const isDarkMode = useColorScheme() === "dark";

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
