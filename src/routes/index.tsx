import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn, SignUp } from '../screens';

import { Colors } from '../values';

const Stack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: { backgroundColor: Colors.PRIMARY_COLOR },
                headerShown: false,
            }}>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    );
};

export default AuthRoutes;
