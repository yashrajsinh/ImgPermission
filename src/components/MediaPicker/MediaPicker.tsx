import React from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
{
  /* This componet loads the botton sheet with 3 options to pick
      1. galley 
      2. Camera
      3. Cancel */
}

export default function MediaPicker({ visible, setVisible, onPick }: any) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <TouchableOpacity onPress={() => onPick('camera')}>
            <Text style={styles.option}>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onPick('gallery')}>
            <Text style={styles.option}>Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setVisible(false)}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  sheet: {
    backgroundColor: 'white',
    padding: 20,
  },
  option: {
    fontSize: 18,
    padding: 10,
  },
  cancel: {
    fontSize: 18,
    padding: 10,
    color: 'red',
  },
});
