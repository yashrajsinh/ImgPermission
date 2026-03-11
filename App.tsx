/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//Cutom components
import ImageButton from './src/components/ImageButton/ImageButton';
import UploadButton from './src/components/UploadButton/UploadButton';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ImageButton />
        <UploadButton />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
