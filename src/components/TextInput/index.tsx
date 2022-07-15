import React from 'react';
import { TextInputProps } from 'react-native';
import { Colors } from '../../values';

import { View, CustomTextInput } from './styles';

interface Props extends TextInputProps {
    name: string;
    icon: string;
}

const TextInput: React.FC<Props> = ({ name, icon, ...rest }) => {
    return (
        <View>
            <CustomTextInput placeholderTextColor={Colors.BROWN} {...rest} />
        </View>
    );
};

export default TextInput;
