import React from 'react';
import { Image } from 'react-native';

import { Button, logo, Text, TextInput, View } from '../../components';

const SignIn: React.FC = () => {
    return (
        <View flex={1} centerY centerX padding={30}>
            <Image source={logo} />
            <Text
                color="WHITE"
                fontFamily="RobotoSlabMedium"
                fontSize={20}
                marginTop={64}
                paddingHorizontal={24}>
                Faça seu Login
            </Text>
            <TextInput name="Email" icon="mail" placeholder="E-mail" />
            <TextInput name="password" icon="lock" placeholder="Senha" />
            <Button>Entrar</Button>
        </View>
    );
};

export default SignIn;
