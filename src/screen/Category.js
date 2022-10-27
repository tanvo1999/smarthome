import React, { Component } from 'react';
import { Button, Input, ListItem, Text } from 'react-native-elements';
import { StyleSheet, Dimensions, View, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tooltip from 'rn-tooltip';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const list = [
    {
      name: 'Amy Farha',
      description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
      name: 'Chris Jackson',
      description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Amy Farha',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Chris Jackson',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Amy Farha',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Chris Jackson',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Amy Farha',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Chris Jackson',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Amy Farha',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Chris Jackson',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Amy Farha',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Chris Jackson',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Chris Jackson',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
];  

const Category = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
            {
                list.map((l, i) => (
                <ListItem key={i} bottomDivider onPress={() => console.log(1)}>
                    <ListItem.Content>
                        <ListItem.Title style={{fontWeight: 'bold'}}>{l.name} {' '}
                            <Tooltip  height={'auto'} popover={<Text>{l.description}</Text>}>
                                <Icon name="info-circle" size={15} color={'black'} />
                            </Tooltip>
                        </ListItem.Title>
                        <ListItem.Subtitle numberOfLines={1} style={{ color: 'gray' }}>
                            {l.description}
                        </ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron></ListItem.Chevron>
                </ListItem>
                ))
            }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
});

export default Category;