import React from 'react';
import { TextInputProps } from 'react-native';

import { Colors } from '../../values';

import { ViewStyed, TextInputStyled, IconStyled } from './styles';

interface Props extends TextInputProps {
    name: string;
    icon: string;
}

const TextInput: React.FC<Props> = ({ name, icon, ...rest }) => {
    return (
        <ViewStyed>
            <IconStyled name={icon} size={20} />
            <TextInputStyled placeholderTextColor={Colors.BROWN} {...rest} />
        </ViewStyed>
    );
};

export default TextInput;
