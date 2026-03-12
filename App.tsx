import React, { useState } from 'react';
import { StyleSheet, Alert, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import ImageButton from './src/components/ImageButton/ImageButton';
import MediaPicker from './src/components/MediaPicker/MediaPicker';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
  check,
  request,
  PERMISSIONS,
  openSettings,
} from 'react-native-permissions';

export default function App() {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handlePick = async (type: 'camera' | 'gallery') => {
    try {
      if (type === 'camera') {
        const permission =
          Platform.OS === 'android'
            ? PERMISSIONS.ANDROID.CAMERA
            : PERMISSIONS.IOS.CAMERA;

        let status = await check(permission);
        if (status !== 'granted') {
          status = await request(permission);
        }

        if (status !== 'granted' && status !== 'limited') {
          Alert.alert(
            'Camera Permission Needed',
            'Please allow camera access in Settings',
            [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Open Settings', onPress: () => openSettings() },
            ],
          );
          return;
        }

        const result = await launchCamera({ mediaType: 'photo' });
        if (result.assets?.[0]?.uri) setImage(result.assets[0].uri);
      } else {
        // ✅ Add gallery permission check
        const permission =
          Platform.OS === 'android'
            ? parseInt(Platform.Version as string, 10) >= 33
              ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES // Android 13+
              : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE // Android 12 and below
            : PERMISSIONS.IOS.PHOTO_LIBRARY;

        let status = await check(permission);
        if (status !== 'granted') {
          status = await request(permission);
        }

        if (status !== 'granted') {
          Alert.alert(
            'Gallery Permission Needed',
            'Please allow photo library access in Settings',
            [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Open Settings', onPress: () => openSettings() },
            ],
          );
          return;
        }

        const result = await launchImageLibrary({ mediaType: 'photo' });
        if (result.assets?.[0]?.uri) setImage(result.assets[0].uri);
      }
    } catch (err) {
      console.warn('Error picking image:', err);
    }

    setVisible(false);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
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
