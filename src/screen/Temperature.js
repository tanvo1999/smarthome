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

const Account = ({navigation}) => {
    const [dataUser, setDataUser] = useState({});
    const [temp, setTem] = useState('28');

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
                    <Text style={styles.txt}>Nhiệt độ trong nhà hiện tại là:</Text>
                    <Text style={styles.txtTem}>{temp}<Icon name='temperature-celsius' size={68} /></Text>
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

export default Account;