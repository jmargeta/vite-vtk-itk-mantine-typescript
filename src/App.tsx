import { MantineProvider, Text } from '@mantine/core';
import Drop from './components/Drop';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
      <Drop />
    </MantineProvider>
  );
}
