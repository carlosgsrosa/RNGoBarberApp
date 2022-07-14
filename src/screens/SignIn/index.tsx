import React from 'react';
import { Image, View } from 'react-native';

import { logo } from '../../components';

// import { Container } from './styles';

const SignIn: React.FC = () => {
    return (
        <View>
            <Image source={logo} />
        </View>
    );
};

export default SignIn;
