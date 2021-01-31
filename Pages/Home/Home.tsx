import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Box, Text } from '../../Components';

const Home: React.FC = () => (
  <Box
    flex={1}
    alignItems="center"
    justifyContent="center"
  >
    <Text color="blue400" fontSize={48} fontWeight="bold">Dapup</Text>
    <StatusBar style="auto" />
  </Box>
);

export default Home;
