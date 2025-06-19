import * as React from 'react';
import { View, Text } from 'react-native';
export default function LittleLemonHeader() {
  return (
   <View style={{backgroundColor: '#505c5c', flex: 1}}>
        <Text style={{fontSize: 40, color: 'white', textAlign: 'center', padding: 10, fontFamily: 'Roboto'}} numberOfLines={2} >
        Welcome to Little Lemon
        </Text>
        <Text style={{fontSize: 28, marginVertical: 8, color: 'white', padding: 12, textAlign: 'center', fontFamily: 'sans-serif'}}>
        Little Lemon is not so charming neighborhood bistro (I might not work on this anymore)  that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
   </View> 
  );
}
