import React from 'react';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { CSSProperties } from 'react';
import { Colors } from '@/constants/Colors';
import { ReactTyped } from 'react-typed';

export default function Hero() {
  return (
    <View style={styles.container as ViewStyle} id="home">
      <View style={styles.content as ViewStyle}>
        <ReactTyped
          backSpeed={50}
          onComplete={function noRefCheck(){}}
          strings={[
            `Hi I'm <span style="color:${Colors.light.primary};">Miguel Sotomayor</span>, Senior <span style="color:${Colors.light.primary};">Data</span> Engineer and <span style="color:${Colors.light.primary};">Data</span> Lead.<br>Please, scroll down to know more about me.`,
          ]}
          typeSpeed={50}
          style={styles.typedText as CSSProperties}
          cursorChar={"▋"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100vh', // Full height of the viewport
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    paddingHorizontal: '5%',
    paddingVertical: 20,
    overflow: 'hidden', // Prevent scrolling
    marginTop: 0, // Ensure there's no margin at the top
  },
  content: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center', // Center horizontally
    textAlign: 'center', // Align text in the center
  } as ViewStyle,
  typedText: {
    fontFamily: 'RobotoMono',
    fontSize: 30,
    letterSpacing: 0.5,
    color: Colors.light.text,
  } as TextStyle,
});