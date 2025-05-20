import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/Auth/Welcome';
import SplashScreen from '../Utils/SplashScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
