import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function MediaPicker({ onPicker }: any) {
  //Use State for bottomSheet
  const [Visible, setVisible] = useState(false);

  return (
    <View>
      <Text>MediaPicker</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
