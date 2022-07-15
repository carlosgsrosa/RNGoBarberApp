import styled from 'styled-components/native';

import { Colors, Fonts } from '../../values';

export const View = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: ${Colors.BLUE_MAGENTA};
    border-radius: 10px;
    margin-bottom: 8px;
`;

export const CustomTextInput = styled.TextInput`
    flex: 1;
    color: ${Colors.WHITE};
    font-size: 16px;
    font-family: ${Fonts.RobotoSlabRegular};
`;
