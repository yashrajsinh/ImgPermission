import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
{
  /* This componet is responsible for showing the imgae button and the actul image */
}
export default function ImageButton({ image, onPress }: any) {
  return (
    <View style={styles.container}>
      {/* onPress Prop */}
      <TouchableOpacity onPress={onPress}>
        {/* If image is picked then use picked image otherwise use default image */}
        <Image
          source={
            image
              ? { uri: image }
              : {
                  uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
                }
          }
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
