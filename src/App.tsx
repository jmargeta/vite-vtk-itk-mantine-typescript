import { MantineProvider, Text } from '@mantine/core';
import Drop from './components/Drop';
import VTKTest from './components/VTKTest';
export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* <Text>Welcome to Mantine!</Text> */}
      {/* <Drop /> */}
      <VTKTest />
      <VTKTest />
    </MantineProvider>
  );
}
