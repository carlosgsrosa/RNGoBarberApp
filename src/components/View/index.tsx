import React from 'react';
import { ViewStyle } from 'react-native';

import { ViewStyled } from './styles';

interface Props {
    flex?: ViewStyle['flex'];
    centerY?: boolean;
    centerX?: boolean;
    padding?: ViewStyle['padding'];
    children: React.ReactNode;
}

const View: React.FC<Props> = ({
    flex,
    centerY = false,
    centerX = false,
    children,
    padding,
    ...rest
}) => {
    return (
        <ViewStyled
            flex={flex}
            centerY={centerY}
            centerX={centerX}
            padding={padding}
            {...rest}>
            {children}
        </ViewStyled>
    );
};

export default View;
