import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

import { Colors, Fonts } from '../../values';

export const View = styled(RectButton)`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background: ${Colors.YELLOW};
    border-radius: 10px;
`;

export const CustomButton = styled.Text`
    font-family: ${Fonts.RobotoSlabMedium};
    color: ${Colors.PRIMARY_COLOR};
    font-size: 18px;
`;
