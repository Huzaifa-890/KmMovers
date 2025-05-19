import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import UserHome from "../screens/User/UserHome";



const UserNavigation = (props) => {

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
                }}
            >

                <Stack.Screen
                    name="UserHome"
                    component={UserHome}
                    options={{ title: "UserHome" }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default UserNavigation;