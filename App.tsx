import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import Routes from './src/routes';
import Providers from './src/providers';

import { Colors, Constants } from './src/values';

const App: React.FC = () => {
    return (
        <Providers>
            <StatusBar
                barStyle={Constants.lightContent}
                backgroundColor={Colors.PRIMARY_COLOR}
            />
            <View style={styles.container}>
                <Routes />
            </View>
        </Providers>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_COLOR,
    },
});

export default App;
