import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

type Props = {
  isOpen: boolean;
  onPress: () => void;
};

export default function HamburgerButton({ isOpen, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={[styles.line, isOpen && styles.line1Open]} />
      <View style={[styles.line, isOpen && styles.line2Open]} />
      <View style={[styles.line, isOpen && styles.line3Open]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    position: 'fixed',
    right: 20,
    top: 20,
    zIndex: 1000,
    cursor: 'pointer',
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: Colors.light.primary,
    marginVertical: 2,
    transition: 'transform 0.3s ease',
  },
  line1Open: {
    transform: [{ rotate: '45deg' }, { translateY: 6 }],
  },
  line2Open: {
    opacity: 0,
  },
  line3Open: {
    transform: [{ rotate: '-45deg' }, { translateY: -6 }],
  },
}); 