import React from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Colors } from '../../values';

import { ViewStyled, ButtonTextStyled, IconStyled } from './styles';

interface Props extends RectButtonProps {
    flex?: ViewStyle['flex'];
    position?: ViewStyle['position'];
    height?: ViewStyle['height'];
    top?: ViewStyle['top'];
    left?: ViewStyle['left'];
    right?: ViewStyle['right'];
    bottom?: ViewStyle['bottom'];
    onPress?: RectButtonProps['onPress'];
    marginVertical?: ViewStyle['marginVertical'];
    marginHorizontal?: ViewStyle['marginHorizontal'];
    outline?: boolean;
    color?: keyof typeof Colors;
    fontSize?: TextStyle['fontSize'];
    icon?: string;
    borderRadius?: ViewStyle['borderRadius'];
    children: string;
}

const Button: React.FC<Props> = ({
    flex,
    position,
    height,
    top,
    left,
    right,
    bottom,
    onPress,
    marginVertical = 0,
    marginHorizontal = 0,
    outline = false,
    color = 'PRIMARY_COLOR',
    fontSize,
    icon,
    borderRadius = 10,
    children,
}) => (
    <ViewStyled
        flex={flex}
        position={position}
        height={height}
        top={top}
        left={left}
        right={right}
        bottom={bottom}
        onPress={onPress}
        marginVertical={marginVertical}
        marginHorizontal={marginHorizontal}
        outline={outline}
        borderRadius={borderRadius}>
        {icon && <IconStyled name={icon} size={20} color={color} />}
        <ButtonTextStyled outline={outline} fontSize={fontSize} color={color}>
            {children}
        </ButtonTextStyled>
    </ViewStyled>
);

export default Button;
