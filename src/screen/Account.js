import React, { Component } from 'react';
import { Button, Input, ListItem, Text, Avatar } from 'react-native-elements';
import { StyleSheet, Dimensions, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Account = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{width: width, height: 220, justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar
                        rounded
                        size="xlarge"
                        containerStyle={{ borderColor: 'gray', borderWidth: 1, shadowOpacity: 1, shadowOffset: {width: 0, height: 0}, shadowColor:'#0d87dc' }}
                        source={{
                            uri:
                            'https://i.pinimg.com/originals/0d/36/e7/0d36e7a476b06333d9fe9960572b66b9.jpg',
                        }}
                        >
                        <Avatar.Accessory size={36}/>
                    </Avatar>
                    <Text h4 h4Style={{fontWeight: 'bold', marginTop: 10}}>Võ Minh Tân </Text>
                </View>
                <View style={{flex: 1}}>
                    <ListItem bottomDivider>
                        <Icon name='account' size={24} />
                        <ListItem.Content>
                        <ListItem.Title numberOfLines={1} >minhtan</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem bottomDivider>
                        <Icon name='clock-time-five' size={24} />
                        <ListItem.Content>
                        <ListItem.Title>Tham gia 3 tháng trước</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem bottomDivider onPress={() => navigation.navigate('TabBottom', { screen: 'Lịch sử'})}>
                        <Icon name='eye' size={24} />
                        <ListItem.Content>
                        <ListItem.Title>Xem lịch sử</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    <ListItem bottomDivider>
                        <Icon name='key-change' size={24} />
                        <ListItem.Content>
                        <ListItem.Title>Đổi mật khẩu</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    <ListItem bottomDivider onPress={() => navigation.navigate('Login')}>
                        <Icon name='logout' size={24} />
                        <ListItem.Content>
                        <ListItem.Title>Đăng xuất</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

});

export default Account;