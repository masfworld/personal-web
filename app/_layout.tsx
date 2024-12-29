import React, { useEffect, PropsWithChildren } from 'react';
import { View, StyleSheet, ViewStyle, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as Animatable from 'react-native-animatable';
import { HelmetProvider, Helmet } from 'react-native-helmet-async';
import NavigationMenu from '@/components/NavigationMenu';
import BackgroundImage from '@/components/ui/BackgroundImage';
import Hero from '@/components/Hero';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { Analytics } from '@vercel/analytics/dist/react';
import { SpeedInsights } from '@vercel/speed-insights/dist/react';
import { animations } from '@/constants/animations';
import TechSection from '@/components/TechSection';

SplashScreen.preventAutoHideAsync();
Animatable.initializeRegistryWithDefinitions(animations);

const screenWidth = Dimensions.get('window').width;

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
    <HelmetProvider>
      <Helmet>
        <title>Miguel Sotomayor - Senior Data Engineer</title>
        <meta name="description" content="A modern personal portfolio showcasing skills, experience, and projects." />
        <meta name="keywords" content="Miguel Sotomayor, Data Engineer, Portfolio, Projects, Experience" />
        <meta name="author" content="Miguel Sotomayor" />
        <meta property="og:title" content="Miguel Sotomayor - Senior Data Engineer" />
        <meta property="og:description" content="A modern personal portfolio showcasing skills, experience, and projects." />
        <meta property="og:url" content="https://miguel.sidesna.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <View style={styles.container as ViewStyle}>
        <Analytics />
        <SpeedInsights />
        <BackgroundImage />
        <NavigationMenu />
        <View style={styles.content as ViewStyle}>
          <View style={styles.mainContent as ViewStyle}>
            <Hero />
            <ExperienceSection />
            <TechSection />
            <ProjectsSection />
            <ContactSection />
            {children}
          </View>
        </View>
      </View>
    </HelmetProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(253, 253, 253)',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
  content: {
    flex: 1,
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
    marginTop: screenWidth <= 768 ? 0 : 0, // No extra margin since image has its own container for small screens
  } as ViewStyle,
  mainContent: {
    marginLeft: screenWidth > 768 ? '20%' : 0,
    width: screenWidth > 768 ? '80%' : '100%',
    paddingHorizontal: screenWidth <= 768 ? 20 : 30, // Adjust padding for small screens
  } as ViewStyle,
});