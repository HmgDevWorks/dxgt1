import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
// import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, View } from 'react-native';

import { Card } from "./components/ui/card"
import { Heading } from "./components/ui/heading"
import { Text } from "./components/ui/text"

export default function App() {
  return (
    <GluestackUIProvider mode="light"><View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Card size="md" variant="filled" className="m-3">
        <Heading size="md" className="mb-1">
          Quick Start
        </Heading>
        <Text size="sm">Start building your next project in minutes</Text>
      </Card>
    </View></GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
