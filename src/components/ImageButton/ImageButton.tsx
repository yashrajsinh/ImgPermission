import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React from 'react';

export default function ImageButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Alert.alert('Being Open')}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
          }}
          style={styles.uploadImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  uploadImage: { width: 150, height: 150 },
});
