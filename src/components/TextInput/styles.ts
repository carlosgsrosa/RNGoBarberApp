import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

import { Colors, Fonts } from '../../values';

export const ViewStyed = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: ${Colors.BLUE_MAGENTA};
    border-radius: 10px;
    margin-bottom: 8px;
    flex-direction: row;
    align-items: center;
`;

export const TextInputStyled = styled.TextInput`
    flex: 1;
    color: ${Colors.WHITE};
    font-size: 16px;
    font-family: ${Fonts.RobotoSlabRegular};
`;

export const IconStyled = styled(Icon)`
    margin-right: 8px;
    color: ${Colors.BROWN};
`;
