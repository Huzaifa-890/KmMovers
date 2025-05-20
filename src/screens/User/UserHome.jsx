import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import UserLayout from '../../Layout/UserLayout';

const UserHome = () => {
  return (
    <UserLayout>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Welcome To KMM  👋</Text>
          <Text style={styles.subtext}>
            This is your user dashboard. Let’s make today productive!
          </Text>
        </View>
      </View>
    </UserLayout>
  );
};

export default UserHome;

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height, // full screen height
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 30,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 24,
  },
});
