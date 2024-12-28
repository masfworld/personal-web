import React, { useEffect, PropsWithChildren } from 'react';
import { View, StyleSheet, ViewStyle, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as Animatable from 'react-native-animatable';
import { animations } from '@/constants/animations';
import NavigationMenu from '@/components/NavigationMenu';
import BackgroundImage from '@/components/ui/BackgroundImage';
import Hero from '@/components/Hero';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

SplashScreen.preventAutoHideAsync();
Animatable.initializeRegistryWithDefinitions(animations);

export default function Layout({ children }: PropsWithChildren) {
  const [fontsLoaded, error] = useFonts({
    RobotoMono: require('../assets/fonts/RobotoMono-Regular.ttf'),
    'RobotoMono-Medium': require('../assets/fonts/RobotoMono-Medium.ttf'),
    'RobotoMono-SemiBold': require('../assets/fonts/RobotoMono-SemiBold.ttf'),
    'RobotoMono-Bold': require('../assets/fonts/RobotoMono-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <View style={styles.container as ViewStyle}>
      <BackgroundImage />
      <NavigationMenu />
      <View style={styles.content as ViewStyle}>
        <View style={styles.mainContent as ViewStyle}>
          <Hero />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
          {children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(253, 253, 253)',
  },
  content: {
    flex: 1,
    position: 'relative',
    overflow: 'scroll',
    height: 'auto',
  },
  mainContent: {
    marginLeft: '20%',
    width: '80%',
    paddingLeft: 30,
  },
});