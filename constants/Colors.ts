/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export const Colors = {
  light: {
    background: 'rgb(253, 253, 253)', // Share this color across components
    text: '#2D3436',
    primary: '#5D52D9',
    secondary: '#636E72',
    accent: '#4834D4',
  },
  dark: {
    text: '#F8F9FA',
    background: '#2D3436',
    primary: '#9B8FFB',
    secondary: '#B2BEC3',
    accent: '#7D6FF5',
  },
};

export type ColorName = keyof typeof Colors.light;