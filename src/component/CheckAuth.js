import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Info from '../api/auth/Info';

const data = async (route) => {
    //Confirm login
    const dataAsync = await AsyncStorage.getItem('user');
    const parseData = JSON.parse(dataAsync);
    if (parseData !== null) {
        const checkAuth = Info(parseData.remember_token).then((data) => {
            if (data.code == 401) {
                return -1;
            }
            return data;
        })
        return checkAuth;
    }
    return -1;
}

export default data;
