import 'dotenv/config';

export default {
  expo: {
    name: "personal-web",
    slug: "personal-web",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    assetBundlePatterns: [
      "**/*",
      "assets/images/*",
      "assets/fonts/**/*"
    ],
    ios: {
      supportsTablet: true,
      infoPlist: {
        NSAppTransportSecurity: {
          NSAllowsArbitraryLoads: true,
        },
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
      staticDirectory: "public",
      themeColor: "#4CAF50",
      title: "Miguel Sotomayor - Senior Data Engineer",
      description: "A modern personal portfolio showcasing skills, experience, and projects.",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      [
        "expo-font",
        {
          fonts: [
            "node_modules/@expo-google-fonts/inter/RobotoMono_400Regular.ttf",
            "node_modules/@expo-google-fonts/inter/RobotoMono_500Medium.ttf",
            "node_modules/@expo-google-fonts/inter/RobotoMono_600SemiBold.ttf",
            "node_modules/@expo-google-fonts/inter/RobotoMono_700Bold.ttf",
          ],
        },
      ],
    ],
    extra: {
      emailjsServiceId: process.env.EXPO_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.EXPO_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.EXPO_PUBLIC_EMAILJS_PUBLIC_KEY,
      recaptchaSiteKey: process.env.EXPO_PUBLIC_RECAPTCHA_SITE_KEY,
      theme: "light",
    },
    experiments: {
      typedRoutes: true,
    },
  },
};