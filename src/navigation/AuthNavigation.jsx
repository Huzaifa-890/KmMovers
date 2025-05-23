import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/Auth/Welcome';
import SplashScreen from '../Utils/SplashScreen';
import Home from '../screens/Auth/Home';

const AuthNavigation = props => {
  const Stack = createNativeStackNavigator();
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={"Btabs"}
        initialRouteName={props.initRoute}
        screenOptions={{
          ...screenOptions,
        }}>
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{ title: 'splash' }}
        />
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{title: 'welcome'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
