import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';



const Welcome = ({navigation}) => {
  return (
    <View>
Kmmores.com
    </View>
  );
};  

const styles = StyleSheet.create({
 container: {
    padding: 10,
    backgroundColor: '#f5f5f5', // light gray background
    alignItems: 'center',       // center horizontally
    justifyContent: 'center',   // center vertically
  },
  brandText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',           // dark blue-gray
    letterSpacing: 1,
  },
});

export default Welcome;
