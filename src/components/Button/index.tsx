import React from 'react';

import { View, CustomButton } from './styles';

interface Props {
    children: string;
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
    return (
        <View {...rest}>
            <CustomButton>{children}</CustomButton>
        </View>
    );
};

export default Button;
