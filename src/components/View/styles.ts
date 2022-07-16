import { ViewStyle } from 'react-native';

import styled from 'styled-components/native';

export const ViewStyled = styled.View`
    ${({ flex }: ViewStyle['flex']) => flex && `flex: ${flex};`};
    ${({ centerY }: boolean) => centerY && 'justify-content: center;'};
    ${({ centerX }: boolean) => centerX && 'align-items: center;'};
    ${({ padding }: boolean) => padding && `padding: ${padding}px;`};
`;
