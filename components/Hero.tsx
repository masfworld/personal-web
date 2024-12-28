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
          onBegin={function noRefCheck(){}}
          onComplete={function noRefCheck(){}}
          onDestroy={function noRefCheck(){}}
          onLastStringBackspaced={function noRefCheck(){}}
          onReset={function noRefCheck(){}}
          onStart={function noRefCheck(){}}
          onStop={function noRefCheck(){}}
          onStringTyped={function noRefCheck(){}}
          onTypingPaused={function noRefCheck(){}}
          onTypingResumed={function noRefCheck(){}}
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

// const TextComponent = ({ children }: { children?: React.ReactNode }) => (
//   <View>
//     <span style={styles.typedText as TextStyle}>{children}</span>
//   </View>
// );

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingVertical: 40,
  },
  content: {
    maxWidth: 1200,
    alignSelf: 'flex-start',
  } as ViewStyle,
  typedText: {
    fontFamily: 'RobotoMono',
    fontSize: 30,
    letterSpacing: 0.5,
    color: Colors.light.text,
  } as TextStyle,
});