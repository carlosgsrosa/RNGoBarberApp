import React from 'react';
import { TextStyle } from 'react-native';
import { Colors, Fonts } from '../../values';

import { TextStyled } from './styles';

interface Props {
    fontSize?: number;
    fontFamily?: keyof typeof Fonts;
    color?: keyof typeof Colors;
    marginTop?: TextStyle['marginTop'];
    marginBottom?: TextStyle['marginBottom'];
    children: React.ReactNode;
}

const Text: React.FC<Props> = ({ children, ...rest }) => {
    return <TextStyled {...rest}>{children}</TextStyled>;
};

export default Text;
