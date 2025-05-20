import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = ({ navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // cleanup
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash.gif')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', // your splash background
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.8,
    height: height * 0.8,
  },
});
