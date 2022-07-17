import React from 'react';
import { PressableProps, TextStyle, ViewStyle } from 'react-native';

import { Colors } from '../../values';

import { PressableStyled, TextButtonStyled, IconStyled } from './styles';

interface Props extends PressableProps, ViewStyle {
    outline?: boolean;
    fontSize?: TextStyle['fontSize'];
    color?: keyof typeof Colors;
    icon?: string;
    children: string;
}

const Button: React.FC<Props> = ({
    outline = false,
    fontSize,
    color = 'PRIMARY_COLOR',
    icon,
    children,
    ...rest
}) => (
    <PressableStyled
        outline={outline}
        android_ripple={{ color: Colors.BLACK }}
        {...rest}>
        {icon && <IconStyled name={icon} size={20} color={color} />}
        <TextButtonStyled outline={outline} fontSize={fontSize} color={color}>
            {children}
        </TextButtonStyled>
    </PressableStyled>
);

export default Button;
