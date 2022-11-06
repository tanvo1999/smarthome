import React, { Component, useEffect, useState } from 'react';
import { Button, Input, ListItem, Text, Avatar } from 'react-native-elements';
import { StyleSheet, Dimensions, View, SafeAreaView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
import 'moment/locale/vi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

import CheckAuth from '../component/CheckAuth';
import Logout from '../api/auth/Logout';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Gas = ({navigation}) => {
    const [dataUser, setDataUser] = useState({});
    const [gas, setGas] = useState('10');

    useEffect(() => {
        CheckAuth().then((data) => {
            if (data == -1) {
                navigation.navigate('Login');
            } else {
                setDataUser(data);
            }
        });
    },[]);

    return (
        <SafeAreaView style={{flex: 1}}>

      <ImageBackground source={require('../lib/img/background.png')} style={{width: width, height: height}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={styles.txt}>Nồng độ khí gas hiện tại là:</Text>
                    <Text style={styles.txtTem}>{gas}%</Text>
                </View>
            </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: width,
        height: height*0.7
    },
    txt: {
        fontSize: 24,
        textAlign: 'center',
    },
    txtTem: {
        fontSize: 72,
        textAlign: 'center'
    }
});

export default Gas;