import { Text, TextProps, StyleSheet } from 'react-native';
import { Fonts } from '@/constants/Fonts';

type ThemedTextProps = TextProps & {
  type?: 'title' | 'subtitle' | 'defaultSemiBold' | 'link' | 'default';
};

export function ThemedText({ type = 'default', style, ...props }: ThemedTextProps) {
  return (
    <Text 
      {...props} 
      style={[
        styles.defaultText,
        type === 'title' && styles.titleText,
        type === 'subtitle' && styles.subtitleText,
        type === 'defaultSemiBold' && styles.defaultSemiBoldText,
        type === 'link' && styles.linkText,
        style
      ]} 
    />
  );
}

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: Fonts.default,
  },
  titleText: {
    fontSize: 32,
    fontFamily: Fonts.bold,
  },
  subtitleText: {
    fontSize: 24,
    fontFamily: Fonts.medium,
  },
  defaultSemiBoldText: {
    fontFamily: Fonts.semiBold,
  },
  linkText: {
    textDecorationLine: 'underline',
  },
});
