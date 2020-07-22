import * as React from 'react';
import {View,Text,} from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Card from './card';

export default class main extends React.Component {
  render() {
    return (
      <>
      <View style ={{ backgroundColor:' ',marginTop:10, flexDirection:"row",justifyContent:"space-between"}}>
      <FontAwesome name="heart" size={25} color="#848484" />
      <Text style ={{color:'#FE9A2E',fontSize:25,alignSelf:"top",fontFamily: "bold"}}>bumble</Text>
      <FontAwesome name="gear" size={25} color="#848484" />
      </View>
      <Card/>
      <View style ={{ backgroundColor:' ',marginTop:10, flexDirection:"row",justifyContent:"space-around"}}>
      <FontAwesome name="user" size={30} color="#848484" />
       <FontAwesome name="picture-o" size={30} color="#848484" />
      <FontAwesome name="wechat" size={30} color="#848484" />
      </View>
      </>
    );
  }
}