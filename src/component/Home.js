import  React, { useState, useEffect, useRef } from 'react';
import { ScrollView, SafeAreaView, View, Text, Dimensions, ImageBackground, StyleSheet, Image, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomSheet, Button, ListItem } from 'react-native-elements';
import { set } from 'react-native-reanimated';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ItemStory = ({navigation}) => {
  return (
    <ImageBackground style={styles.imageItem} source={{uri:'https://tieuthuyet.vn/images/2021/05/de-ton.jpeg'}}>
      <View style={{flex: 1}}>
          <View style={{ width: '50%'}}>
            <LinearGradient paddingVertical={5} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0)']} style={styles.linearGradient}>
            <Text style={{color:'#FFFC57', fontSize: 13}}>
              <MaterialCommunityIcons name="eye" size={13} color={'#FFFC57'} /> 77,777
            </Text>
            </LinearGradient>
          </View>
          <View style={{position: 'absolute', right: 5, top: 5}}>
            <Image style={{width: 22, height: 8}} source={{uri: 'https://tieuthuyet.vn/assets/css/img/icon-hot.gif'}} />
          </View>
          <View style={{position: 'absolute', marginLeft: -4, marginTop: '100%', zIndex: 1}}>
            <Image style={{width: 22, height: 40}} source={{uri: 'https://tieuthuyet.vn/assets/css/img/full-label.png'}} />
          </View>
          <View style={{position:'absolute', bottom: 0, paddingVertical: 10, width: '100%', backgroundColor: 'rgba(0,0,0,0.60)'}}>
            <Text style={{color:'#FFFC57', textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>
              Đế Tôn
            </Text>
          </View>
      </View>
    </ImageBackground>
  )
}

const TitleContent = ({navigation, name, icon , catshow}) => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'Tất Cả', val: 0 },
    { title: 'List Item 2', val: 1 },
    { title: 'List Item 3', val: 2 },
    { title: 'List Item 4', val: 3 },
    { title: 'List Item 5', val: 4 },
    { title: 'List Item 2', val: 1 },
    { title: 'List Item 3', val: 2 },
    { title: 'List Item 4', val: 3 },
    { title: 'List Item 5', val: 4 },
    { title: 'List Item 2', val: 1 },
    { title: 'List Item 3', val: 2 },
    { title: 'List Item 4', val: 3 },
    { title: 'List Item 5', val: 4 },
    { title: 'List Item 2', val: 1 },
    { title: 'List Item 3', val: 2 },
    { title: 'List Item 4', val: 3 },
    { title: 'List Item 5', val: 4 },
  ];
  const [selectCat, setSelectCat] = useState({ title: 'Tất Cả', val: 0 });

  const onPressItem = (item) => {
    console.log(item)
    setSelectCat(item);
    setIsVisible(false);
  }

  return (
    <View style={{ width: width, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: 'gray'}}>
      <View style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
        <Button
          title={name}
          type="clear"
          iconRight={true}
          icon= {icon ? <MaterialCommunityIcons name={icon} size={18} color={'black'} />: <MaterialCommunityIcons name="chevron-right" size={22} />}
          titleStyle={[styles.textTitle,{color: 'black'}]}
          onPress={() => console.log(1)}
        />
      </View>
      {catshow 
        ? <View style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
            <Button
              title={selectCat.title}
              type="clear"
              iconRight={true}
              icon={<MaterialCommunityIcons name="chevron-down" size={22} />}
              titleStyle={[styles.textTitle,{color: 'black'}]}
              onPress={() => setIsVisible(true)}
            />
            <BottomSheet
              isVisible={isVisible}
              containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
            >
              <View style={{width: width, height: 40, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <MaterialCommunityIcons onPress={() => setIsVisible(false)} name="close" style={{marginHorizontal: 20}} size={22} />
              </View>
              {list.map((l, i) => (
                <ListItem key={i} containerStyle={{backgroundColor: 'white', borderTopColor: 'rgba(0,0,0,0.2)', borderTopWidth: 1, marginVertical: 1 }} onPress={() => onPressItem(l)}>
                  <ListItem.Content style={{alignItems: 'center'}}>
                    <ListItem.Title style={{color: 'black'}}>{l.title}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
              <ListItem key={list.length} containerStyle={{ backgroundColor: 'rgb(255, 0, 0)', shadowOpacity: 0.8, shadowOffset: {width: 0, height: 0} }} onPress={() => setIsVisible(false)}>
                <ListItem.Content  style={{alignItems: 'center'}}>
                  <ListItem.Title style={{color: 'black', marginVertical: 3, fontWeight: '500'}}>Huỷ</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </BottomSheet>
      </View>
      : null}
    </View>
  )
}

const HotStory = ({navigation}) => {
  return (
    <View>
      <TitleContent name={'Truyện hot'} catshow={true} icon={'fire'} navigation={navigation}/>
      <View style={{ width: width }}>
        <View style={{ padding: 20 }}>
          <ImageBackground resizeMode={'stretch'} style={styles.image} source={{uri:'https://tieuthuyet.vn/images/2021/05/de-ton.jpeg'}}>
            <View style={{flex: 1}}>
                <View style={{ width: width*0.4-20}}>
                  <LinearGradient paddingVertical={5} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0)']} style={styles.linearGradient}>
                    <Text style={[styles.textTitle,{color:'#FFFC57'}]}>
                      <MaterialCommunityIcons name="eye" size={18} color={'#FFFC57'} /> 77,777
                    </Text>
                  </LinearGradient>
                </View>
                <View style={{position: 'absolute', right: 5, top: 5}}>
                  <Image style={{width: 28, height: 11}} source={{uri: 'https://tieuthuyet.vn/assets/css/img/icon-hot.gif'}} />
                </View>
                <View style={{position: 'absolute', marginLeft: -7, marginTop: '85%', zIndex: 1}}>
                  <Image style={{width: 34, height: 50}} source={{uri: 'https://tieuthuyet.vn/assets/css/img/full-label.png'}} />
                </View>
                <View style={{position:'absolute', bottom: 0, paddingVertical: 15, width: width-40, backgroundColor: 'rgba(0,0,0,0.60)'}}>
                  <Text style={{color:'#FFFC57', textAlign: 'center', fontWeight: 'bold', fontSize: 22}}>
                    Đế Tôn
                  </Text>
                </View>
            </View>
          </ImageBackground>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop:10, paddingLeft: 20}}>
          <ItemStory item={null}/>
          <ItemStory item={null}/>
          <ItemStory item={null}/>
          <ItemStory item={null}/>
          <ItemStory item={null}/>
        </ScrollView>
      </View>
    </View>
  )
};

const ItemNewStory = (item, navigation) => {
  return (
    <ListItem containerStyle={{width: width, borderBottomWidth: 1, }} onPress={() => {console.log(1)}}>
      <ListItem.Content style={{flexDirection: 'row'}}>
          <View style={{width: '75%', flexDirection: 'row'}}>
            <MaterialCommunityIcons name="chevron-right" size={15} /><Text numberOfLines={1}>Simon Mignolet Simon Mignolet</Text>
          </View>
          <View style={{width: '25%', alignItems: 'center', borderColor: 'rgba(0,0,0,0.4)', borderLeftWidth: 0.2, }}>
            <Text numberOfLines={1} >23 giờ trước</Text>
          </View>
      </ListItem.Content>
    </ListItem>
  )
}

const NewStory = ({navigation}) => {
  return (
    <View>
      <TitleContent name={'Truyện mới cập nhật'} catshow={true} navigation={navigation}/>
        <ItemNewStory item={null} navigation={navigation}/>
        <ItemNewStory item={null} navigation={navigation}/>
        <ItemNewStory item={null} navigation={navigation}/>
        <ItemNewStory item={null} navigation={navigation}/>
        <ItemNewStory item={null} navigation={navigation}/>
        <ItemNewStory item={null} navigation={navigation}/>
        <ItemNewStory item={null} navigation={navigation}/>
        <ItemNewStory item={null} navigation={navigation}/>
        <ItemNewStory item={null} navigation={navigation}/>
        <ItemNewStory item={null} navigation={navigation}/>
    </View>
  )
}

const ItemCategory = ({navigation}) => {
  return (
    <ListItem 
      style={styles.categoryItem} 
      containerStyle={{backgroundColor: 'rgb(151, 81, 212)', borderRadius: 7}} 
      onPress={() => {console.log(1)}}
    >
      <ListItem.Content>
        <Text numberOfLines={1} style={{ color: 'white',width: '100%' , textAlign: 'center', padding: 0, fontSize: 16, fontWeight: 'bold'}}>1Simon Mignolet</Text>
      </ListItem.Content>
    </ListItem>
  )
}

const Category = ({navigation}) => {
  return (
    <View>
      <TitleContent name={'Thể loại'} navigation={navigation}/>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1, paddingTop: 5 }}>
        <ItemCategory/>
        <ItemCategory/>
        <ItemCategory/>
        <ItemCategory/>
        <ItemCategory/>
        <ItemCategory/>
        <ItemCategory/>
      </View>
    </View>
  )
}

const ItemSuccess = ({navigation}) => {
  return (
    <ListItem style={{width: '33.3%'}} onPress={() => {console.log(1)}}>
      <ListItem.Content style={{marginHorizontal: '-7%'}}>
        <ImageBackground imageStyle={{ borderRadius: 10}} style={styles.imageItemSuccess} source={{uri:'https://tieuthuyet.vn/images/2021/05/de-ton.jpeg'}}/>
        <Text style={{fontSize: 13, fontWeight: 'bold', color: '#4E4E4E', textAlign: 'center'}} numberOfLines={1}>Đế tôn Đế tônn Đế tôn Đế tôn</Text>
        <View style={{backgroundColor: '#76e689', width: '100%', borderRadius: 4, alignItems: 'center'}}>
          <Text style={{fontSize: 12}}>1000 Chương</Text>
        </View>
      </ListItem.Content>
    </ListItem>
  )
}

const SuccessStory = ({navigation}) => {
  return (
    <View>
      <TitleContent name={'Truyện đã hoàn thành'} navigation={navigation}/>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
        <ItemSuccess navigation={navigation}/>
        <ItemSuccess navigation={navigation}/>
        <ItemSuccess navigation={navigation}/>
        <ItemSuccess navigation={navigation}/>
        <ItemSuccess navigation={navigation}/>
        <ItemSuccess navigation={navigation}/>
        <ItemSuccess navigation={navigation}/>
        <ItemSuccess navigation={navigation}/>
        <ItemSuccess navigation={navigation}/>
      </View>
    </View>
  )
}

const HomeScreen = ({navigation}) => {
  useEffect(() => {
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.2)'}}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <View style={{width: width*0.8, height: 40, borderWidth: 1, borderRadius: 5, marginHorizontal: width*0.1, justifyContent: 'center', marginVertical: 5, backgroundColor: 'white'}}>
            <Text style={{marginLeft: 15, fontSize: 15}}>Tìm kiếm...</Text>
            <View style={{position: 'absolute', right: 0, width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1}}><Icon name="search" size={35} color={'black'} /></View>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HotStory navigation={navigation}/>
        <NewStory navigation={navigation}/>
        <Category navigation={navigation}/>
        <SuccessStory navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    width: width*0.9,
    height: width*1.0,
    resizeMode: "contain",
    justifyContent: "center",
  },
  imageItem: {
    width: width*0.4,
    height: height*0.25,
    resizeMode: "contain",
    justifyContent: "center",
    marginRight: 10
  },
  imageItemSuccess: {
    width: '100%',
    height: 140,
    resizeMode: "contain",
    justifyContent: "center",
    borderRadius: 10
  },
  textTitle: {
    fontSize: 18, 
    fontWeight: '500',
    textTransform: 'uppercase'
  },
  categoryItem: {
    width: '48%', 
    shadowOffset: 
    {
      width: 0, 
      height: 0
    }, 
    shadowOpacity: 0.8 , 
    shadowColor: '#4b0082', 
    borderWidth: 1, 
    borderRadius: 7, 
    margin: '1%'}
});

export default HomeScreen;