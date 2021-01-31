import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import theme from '../../Theme';

const RootWrapper: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
);

export default RootWrapper;
