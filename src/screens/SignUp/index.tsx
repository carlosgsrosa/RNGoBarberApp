import React from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Button, logo, Text, TextInput, View } from '../../components';

import { BackToLogin } from './styles';

const SignUp: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View flex={1} centerY centerX padding={30}>
            <Image source={logo} />
            <Text
                color="WHITE"
                fontFamily="medium"
                fontSize={20}
                marginTop={32}
                marginBottom={24}>
                Crie sua conta
            </Text>
            <TextInput name="Nome" icon="user" placeholder="Nome" />
            <TextInput name="Email" icon="mail" placeholder="E-mail" />
            <TextInput name="Password" icon="lock" placeholder="Senha" />
            <Button onPress={() => console.log('CADASTRAR')} marginTop={16}>
                Cadastrar
            </Button>
            <BackToLogin>
                <Button
                    outline
                    color="WHITE"
                    icon="arrow-left"
                    onPress={() => navigation.navigate('SignIn')}>
                    Voltar para o login
                </Button>
            </BackToLogin>
        </View>
    );
};

export default SignUp;
