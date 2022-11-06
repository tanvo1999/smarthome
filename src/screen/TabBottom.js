import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './List';
import Category from './History';
import Notification from '../screen/Notification';
import ProfileScreen from '../screen/Account';

const Tab = createBottomTabNavigator();

const TabBottom = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({color}) =>  <Icon name="home" size={20} color={color} />,
        })}
        initialRouteName="Trang chủ"
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'black',
          activeBackgroundColor: '#0d87dc',
          inactiveBackgroundColor: '#c1e5f8',
          labelStyle: {fontSize: 14}
        }}
        >
        <Tab.Screen name="Trang chủ"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) =>  <Icon name="home" size={20} color={color} />,
          }}>
        </Tab.Screen>
        <Tab.Screen name="Thông báo"
          component={Notification}
          options={{
            tabBarIcon: ({color}) =>  <Icon name="bell" size={20} color={color} />,
          }}>
        </Tab.Screen>
        <Tab.Screen name="Lịch sử"
          component={Category}
          options={{
            tabBarIcon: ({color}) =>  <Icon name="history" size={20} color={color} />,
          }}>
        </Tab.Screen>
        <Tab.Screen name="Tài khoản"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) =>  <Icon name="user" size={20} color={color} />,
          }}>
        </Tab.Screen>
      </Tab.Navigator>
  );
}

export default TabBottom;