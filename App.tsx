import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

import { Colors, Constants } from './src/values';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar
                barStyle={Constants.lightContent}
                backgroundColor={Colors.PRIMARY_COLOR}
            />
            <View style={styles.container}>
                <Routes />
            </View>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_COLOR,
    },
});

export default App;
