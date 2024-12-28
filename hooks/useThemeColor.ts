/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light
) {
  const theme = 'light'; // You can make this dynamic later with useColorScheme()
  
  if (props[theme]) {
    return props[theme];
  }
  
  return Colors[theme][colorName];
}
