import { createDrawerNavigator } from '@react-navigation/drawer';
import  React, { useState, useEffect, useRef } from 'react';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import TabBottom from './StackNavigator';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Đăng nhập" component={Login} />
                <Drawer.Screen headerShown={false} name="Trang chủ" component={TabBottom} />
                <Drawer.Screen name="Tài khoản" component={Login} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MyDrawer;