import styled from 'styled-components/native';

import { Colors, Fonts } from '../../values';

export const CustomText = styled.Text`
    ${(props: any) => props.fontSize && `font-size: ${props.fontSize}px;`};
    color: ${(props) => Colors[props.color]};
    font-family: ${(props) => Fonts[props.fontFamily]};
    ${(props) => `margin-top: ${props.marginTop}px;`};
    ${(props) =>
        `padding: ${props.paddingHorizontal}px ${props.paddingVertical}px;`};
`;
