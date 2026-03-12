/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
//Cutom components
import ImageButton from './src/components/ImageButton/ImageButton';

import MediaPicker from './src/components/MediaPicker/MediaPicker';

//to pick an image or gallery
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

function App() {
  //For visibility
  const [visible, setVisible] = useState(false);
  // For an image
  const [image, setImage] = useState(null);

  //func to handle the image
  async function handlePick(type: string) {
    let result;
    //If Camera is selected
    if (type === 'camera') {
      result = await launchCamera({ mediaType: 'photo' });
    }
    if (type === 'gallery') {
      result = await launchImageLibrary({ mediaType: 'photo' });
    }
    //set the image
    // safely get uri
    const uri = result?.assets?.[0]?.uri;
    if (uri) {
      setImage(uri);
    }
    setVisible(false);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ImageButton image={image} onPress={() => setVisible(true)} />
        <MediaPicker
          visible={visible}
          setVisible={setVisible}
          onPick={handlePick}
        />
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
