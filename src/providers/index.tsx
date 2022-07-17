import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

interface Props {
    children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => (
    <NavigationContainer>{children}</NavigationContainer>
);

export default Providers;
