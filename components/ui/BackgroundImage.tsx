import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function BackgroundImage() {
  if (screenWidth <= 768) {
    // Show the top-left corner image container for small screens
    return (
      <View style={styles.smallScreenContainer}>
        <Image
          source={require('@/assets/images/personal_bg_no_back_2.png')}
          style={styles.smallScreenImage}
          resizeMode="contain"
        />
      </View>
    );
  }

  // Default layout for larger screens
  return (
    <View style={styles.largeScreenContainer}>
      <Image
        source={require('@/assets/images/personal_bg_no_back_2.png')}
        style={styles.largeScreenImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // For small screens
  smallScreenContainer: {
    width: '100%',
    marginTop: 20, // Adjust spacing above the image
    marginBottom: 20, // Adjust spacing below the image
  },
  smallScreenImage: {
    width: 100, // Adjust width for smaller screens
    height: 100, // Adjust height for smaller screens
  },

  // For large screens
  largeScreenContainer: {
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
  largeScreenImage: {
    width: '100%',
    height: '70%',
    objectFit: 'contain',
    filter: 'grayscale(100%) brightness(1.1)',
  },
});