import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function BackgroundImage() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/personal_bg_no_back_2.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '20%',
    zIndex: -1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
  },
  image: {
    width: '100%',
    height: '70%',
    objectFit: 'contain',
    filter: 'grayscale(100%) brightness(1.1)',
  },

  gradientEdge: {
    position: 'absolute',
    top: 0,
    right: -25,
    bottom: 0,
    width: 25,
  },
}); 