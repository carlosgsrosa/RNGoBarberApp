import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

import { Colors, Fonts } from '../../values';

export const ViewStyled = styled(RectButton)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background: ${Colors.YELLOW};
    border-radius: ${({ borderRadius }) => `${borderRadius}px;`};
    margin-bottom: ${({ marginVertical }) => `${marginVertical}px;`};
    margin-top: ${({ marginVertical }) => `${marginVertical}px;`};
    margin-left: ${({ marginHorizontal }) => `${marginHorizontal}px;`};
    margin-right: ${({ marginHorizontal }) => `${marginHorizontal}px;`};

    ${({ flex }) => flex && `flex: ${flex}`};
    ${({ outline }) => outline && `background: ${Colors.TRANSPARENT};`};
    ${({ position }) => position && `position: ${position}`};
    ${({ height }) => height && `height: ${height}px;`};
    ${({ top }) => top && `top: ${top}px;`};
    ${({ left }) => left && `left: ${left}px;`};
    ${({ right }) => right && `right: ${right}px;`};
    ${({ bottom }) => bottom && `bottom: ${bottom}px;`};

    /* border: 1px solid ${Colors.BLUE_MAGENTA}; */
`;

export const ButtonTextStyled = styled.Text`
    font-family: ${Fonts.RobotoSlabMedium};
    color: ${({ color }) => Colors[color]};
    ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`};
`;

export const IconStyled = styled(Icon)`
    margin-right: 8px;
    color: ${({ color }) => Colors[color]};
`;
