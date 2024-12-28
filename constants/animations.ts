// constants/animations.ts
import { ViewStyle } from 'react-native';

type AnimationType = {
  from: Partial<ViewStyle>;
  to: Partial<ViewStyle>;
};

export const animations: { [key: string]: AnimationType } = {
  slideUp: {
    from: { transform: [{ translateY: 100 }] },
    to: { transform: [{ translateY: 0 }] },
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
};