import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Box, RootWrapper, Text } from '../../Components';

const Home: React.FC = () => (
  <RootWrapper>
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <Text color="blue400" fontSize={48} fontWeight="bold">Dapup</Text>
      <StatusBar style="auto" />
    </Box>
  </RootWrapper>
);

export default Home;
