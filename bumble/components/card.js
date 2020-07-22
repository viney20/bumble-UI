import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {ScrollView} from 'react-native'


function Cardd () {
   return (
  <Card style={{height:"85%", borderRadius: 30,}}>
  <ScrollView >
  
      <Card.Cover style={{height:542 , borderRadius: 30,}} source={{ uri: 'https://picsum.photos/200/300' }} />
      

      </ScrollView>
  </Card>
);
 }
export default Cardd
