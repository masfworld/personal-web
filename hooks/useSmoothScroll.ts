import { useCallback } from 'react';
import { Platform } from 'react-native';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    if (Platform.OS !== 'web') return;

    const element = document.getElementById(sectionId);
    if (!element) return;

    // Get the element's position
    const rect = element.getBoundingClientRect();
    const absoluteTop = window.pageYOffset + rect.top;
    
    // Scroll to element
    window.scrollTo({
      top: absoluteTop,
      behavior: 'smooth'
    });
  }, []);

  return scrollToSection;
}; 