import React from 'react';
import { TextStyle } from 'react-native';
import { Colors, Fonts } from '../../values';

import { CustomText } from './styles';

interface Props {
    fontSize?: number;
    fontFamily?: keyof typeof Fonts;
    color?: keyof typeof Colors;
    marginTop?: TextStyle['marginTop'];
    paddingVertical?: TextStyle['paddingVertical'];
    paddingHorizontal?: TextStyle['paddingHorizontal'];
    children: React.ReactNode;
}

const Text: React.FC<Props> = ({
    fontSize,
    fontFamily = 'REGULAR',
    color = 'BLACK',
    marginTop = 0,
    paddingVertical = 0,
    paddingHorizontal = 0,
    children,
    ...rest
}) => {
    return (
        <CustomText
            fontSize={fontSize}
            fontFamily={fontFamily}
            color={color}
            marginTop={marginTop}
            paddingVertical={paddingVertical}
            paddingHorizontal={paddingHorizontal}
            {...rest}>
            {children}
        </CustomText>
    );
};

export default Text;
