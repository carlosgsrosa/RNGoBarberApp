import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

import { Colors, Fonts } from '../../values';

export const PressableStyled = styled.Pressable`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background: ${({ outline }) =>
        outline ? Colors.TRANSPARENT : Colors.YELLOW};
    border-radius: 10px;

    ${({ position }) => position && `position: ${position}`};
    ${({ height }) => height && `height: ${height}px;`};
    ${({ top }) => top && `top: ${top}px;`};
    ${({ left }) => left && `left: ${left}px;`};
    ${({ right }) => right && `right: ${right}px;`};
    ${({ bottom }) => bottom && `bottom: ${bottom}px;`};

    /* border: 1px solid ${Colors.BLUE_MAGENTA}; */
`;

export const TextButtonStyled = styled.Text`
    font-family: ${Fonts.medium};
    color: ${({ color }) => Colors[color]};
    ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`};
`;

export const IconStyled = styled(Icon)`
    margin-right: 8px;
    color: ${({ color }) => Colors[color]};
`;
