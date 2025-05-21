import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('welcome');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // cleanup
  }, [navigation]);

  return (
    
    <ImageBackground
      source={require('../assets/SplashScreen/BgSplash.png')} // your background image
      style={styles.background}
    >
      <Image
        source={require('../assets/SplashScreen/Logo.png')} // add your logo file here
        style={styles.logo}
        resizeMode="contain"
      />
    </ImageBackground>
  );
};

export default SplashScreen;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
    logo: {
    width: width * 0.7,
    height: height * 0.3,
  },
});