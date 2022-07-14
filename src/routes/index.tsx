import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn, SignUp } from '../screens';

import { Colors } from '../values';

const Stack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: { backgroundColor: Colors.primaryColor },
                headerShown: false,
            }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
};

export default AuthRoutes;
