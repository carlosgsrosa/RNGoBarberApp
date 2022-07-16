import React from 'react';
import { Image } from 'react-native';

import {
    Button,
    logo,
    NewAccount,
    Text,
    TextInput,
    View,
} from '../../components';

const SignUp: React.FC = () => {
    return (
        <View flex={1} centerY centerX padding={30}>
            <Image source={logo} />
            <Text
                color="WHITE"
                fontFamily="RobotoSlabMedium"
                fontSize={20}
                marginTop={32}
                marginBottom={24}>
                Crie sua conta
            </Text>
            <TextInput name="Nome" icon="user" placeholder="Nome" />
            <TextInput name="Email" icon="mail" placeholder="E-mail" />
            <TextInput name="Password" icon="lock" placeholder="Senha" />
            <Button onPress={() => console.log('ENTRAR')}>Cadastrar</Button>
            <Button
                flex={1}
                outline
                icon="arrow-left"
                color="WHITE"
                position="absolute"
                bottom={0}
                onPress={() => console.log('ENTRAR')}>
                Voltar para o login
            </Button>
            <NewAccount />
        </View>
    );
};

export default SignUp;
