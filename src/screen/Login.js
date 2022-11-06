import React, { Component, useEffect, useState } from 'react';
import { Button, Input, ListItem, Text } from 'react-native-elements';
import { StyleSheet, Dimensions, View, SafeAreaView, Platform, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import TouchableScale from 'react-native-touchable-scale';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import messaging from "@react-native-firebase/messaging";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from '../api/auth/Login';
import CheckAuth from '../component/CheckAuth';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const FormLogin = ({navigation, route}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const requestIOSPermission = async () => {
        const result = await messaging().hasPermission();

        if (result !== messaging.AuthorizationStatus.AUTHORIZED) {
            await messaging().requestPermission();
        }
    }

    useEffect(() => {
        if (Platform.OS === 'ios') {
            requestIOSPermission();
        }
        CheckAuth().then((data) => {
            if (data !== -1) {
                navigation.navigate('TabBottom');
            }
        });
    },[]);

    const storeData = async (item, value) => {
        try {
            await AsyncStorage.setItem(item, JSON.stringify(value))
        } catch (e) {
            console.error('AsyncStorage error: ' + e.message);
        }
    }

    const login = async () => {
        const fcmtoken = await messaging().getToken();
        Login(email, password, fcmtoken, Platform.OS).then((data) => {
            if(data.status === false) {
                Alert.alert(
                    "Thông báo",
                    "Đăng nhập thất bại. Vui lòng kiểm tra lại email / mật khẩu!",
                    [
                        { text: "Đóng" }
                    ],
                );
            } else {
                storeData('user', data.data);
                navigation.navigate('TabBottom')
            }
        })
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{widthL: width, alignItems: 'center', marginVertical: 20}}>
                <Text style={{fontWeight: '700'}} h3>Đăng nhập</Text>
            </View>
            <View style={{marginHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}>
                <Input 
                    label="Email"
                    placeholder="Nhập email"
                    value={email}
                    onChangeText={(txt) => setEmail(txt)}
                    autoCapitalize={'none'}
                    leftIcon={
                        <Icon
                        name='user'
                        size={23}
                        color='black'
                    />} 
                />
                <Input 
                    secureTextEntry={true} 
                    label="Mật khẩu"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    autoCapitalize={'none'}
                    onChangeText={(txt) => setPassword(txt)}
                    leftIcon={
                        <Icon
                        name='lock'
                        size={23}
                        color='black'
                    />} 
                />

                <ListItem 
                    onPress={() => login()}
                    Component={TouchableScale}
                    friction={90}
                    tension={100}
                    activeScale={0.85}
                    linearGradientProps={{
                        colors: ['#bc7fe8', '#0d87dc'],
                        start: { x: 1, y: 0 },
                        end: { x: 0.2, y: 0 },
                    }}
                    ViewComponent={LinearGradient}
                    containerStyle={styles.button}
                >
                    <ListItem.Content style={{alignItems: 'center'}}>
                        <ListItem.Title numberOfLines={1} style={styles.textButton}>
                            Đăng nhập
                        </ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textButton: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#fff'
    },
    button: {
        marginTop: 10, 
        height: 70, 
        width: '90%', 
        borderRadius: 15,
    }
});

export default FormLogin;