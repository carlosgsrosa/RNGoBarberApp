import styled from 'styled-components/native';

import { Colors, Fonts } from '../../values';

export const TextStyled = styled.Text`
    ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`};
    color: ${({ color }) => Colors[color]};
    font-family: ${({ fontFamily }) => Fonts[fontFamily]};
    ${({ marginTop }) => `margin-top: ${marginTop}px;`};
    margin-bottom: ${({ marginBottom }) => `${marginBottom}px;`};
`;
