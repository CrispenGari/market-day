module.exports = {
  expo: {
    name: "Mzansi Mart",
    slug: "mzansimart",
    version: "0.0.1",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "mzansimart",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.crispengari.mzansimart",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      package: "com.crispengari.mzansimart",
      jsEngine: "hermes",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/icon.png",
    },
    plugins: [
      "expo-router",
      "expo-audio",
      [
        "expo-notifications",
        {
          icon: "./assets/icons/notifications.png",
          color: "#ffffff",
          defaultChannel: "mzansi_mart",
          sounds: ["./assets/sounds/notifications.wav"],
          enableBackgroundRemoteNotifications: false,
        },
      ],
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {},
      EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY:
        process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
      EXPO_PUBLIC_CONVEX_URL: process.env.EXPO_PUBLIC_CONVEX_URL,
      EXPO_PUBLIC_CONVEX_SITE: process.env.EXPO_PUBLIC_CONVEX_SITE,
      CONVEX_DEPLOYMENT: process.env.CONVEX_DEPLOYMENT,
      GOOGLE_MAPS_APIKEY: process.env.GOOGLE_MAPS_APIKEY,
      eas: {
        projectId: "3bffdf88-4f1b-4a1f-a0f2-e25e4d0a51dc",
      },
    },
  },
};
