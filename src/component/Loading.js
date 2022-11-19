import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { UIActivityIndicator } from 'react-native-indicators';

const Loading = ({props}) => {
    return (
        <View style={styles.container}>
            <UIActivityIndicator color='#124CA7' size={30} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        top: '50%',
        left: '50%',
        position: 'absolute',
        flex: 1,
        paddingVertical: 20
    }
})
export default Loading;