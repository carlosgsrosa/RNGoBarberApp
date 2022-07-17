import React from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Button, logo, Text, TextInput, View } from '../../components';

import { NewAccount } from './styles';

const SignIn: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View flex={1} centerY centerX padding={30}>
            <Image source={logo} />
            <Text
                color="WHITE"
                fontFamily="medium"
                fontSize={20}
                marginTop={64}
                marginBottom={24}>
                Faça seu Login
            </Text>
            <TextInput name="Email" icon="mail" placeholder="E-mail" />
            <TextInput name="Password" icon="lock" placeholder="Senha" />
            <Button marginVertical={8} onPress={() => console.log('ENTRAR')}>
                Entrar
            </Button>
            <Button
                outline
                color="WHITE"
                onPress={() => console.log('ESQUECI')}>
                Esqueci minha senha
            </Button>
            <NewAccount>
                <Button
                    outline
                    color="YELLOW"
                    icon="log-in"
                    onPress={() => navigation.navigate('SignUp')}>
                    Criar uma conta
                </Button>
            </NewAccount>
        </View>
    );
};

export default SignIn;
