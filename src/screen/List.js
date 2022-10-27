import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { StyleSheet, Dimensions, View, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import TouchableScale from 'react-native-touchable-scale';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const list = [
    {
        name: 'Tác giả',
        navigator: 'asdasdas',
        icon: 'account-cowboy-hat'
    },
    {
        name: 'Truyện HOT',
        navigator: 'asdasdas',
        icon: 'fire'
    },
    {
        name: 'Top truyện yêu thích',
        navigator: 'asdasdas',
        icon: 'account-heart'
    },
    {
        name: 'Truyện mới cập nhật',
        navigator: 'asdasdas',
        icon: 'archive-arrow-up'
    },
    {
        name: 'Truyện đã hoàn thành',
        navigator: 'asdasdas',
        icon: 'text-box-check'
    },
    {
        name: 'Truyện bạn đã xem',
        navigator: 'asdasdas',
        icon: 'eye'
    },
    {
        name: 'Truyện bạn yêu thích',
        navigator: 'asdasdas',
        icon: 'heart-multiple'
    },
];  

const List = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View style={{alignItems: 'center', width: width}}>
                {
                    list.map((l, i) => (
                    <ListItem 
                        key={i}  
                        bottomDivider 
                        onPress={() => console.log(1)}
                        Component={TouchableScale}
                        friction={90}
                        tension={100}
                        activeScale={0.85}
                        linearGradientProps={{
                            colors: ['#FF9800', '#F44336'],
                            start: { x: 1, y: 0 },
                            end: { x: 0.2, y: 0 },
                        }}
                        ViewComponent={LinearGradient}
                        containerStyle={{marginTop: 10, height: 70, width: '85%', borderRadius: 15}}
                    >
                        <Icon name={l.icon} color={'#fff'} size={24} />
                        <ListItem.Content>
                            <ListItem.Title numberOfLines={1} style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>{l.name}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron color={'#fff'}></ListItem.Chevron>
                    </ListItem>
                    ))
                }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
});

export default List;