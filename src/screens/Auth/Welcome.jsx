import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.brandText}>Kmmores.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,                  // full screen
    padding: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1,
  },
});

export default Welcome;
