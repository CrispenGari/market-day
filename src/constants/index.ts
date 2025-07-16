export const COLORS = {
  main: "#FBF6E9",
  primary: "#E3F0AF",
  secondary: "#FE4F2D",
  tertiary: "#118B50",
  black: "#000000",
  white: "#ffffff",
  red: "#FB2576",
  gray: "#758694",
  transparent: "transparent",
  gray100: "#DDDDDD",
  gray200: "#7F8CAA",
  google: "#4285F4",
  facebook: "#017FFE",
};

export const DELIVERY_OPTIONS = [
  { id: 0, name: "Collect", value: "collect" },
  { id: 1, name: "Delivery", value: "delivery" },
];

export const AUDIOS = {
  published: require("@/assets/sounds/published.mp3"),
};

export const Fonts = {
  "EBGaramond-Bold": require("@/assets/fonts/EBGaramond-Bold.ttf"),
  "EBGaramond-Regular": require("@/assets/fonts/EBGaramond-Regular.ttf"),
};
export const FONTS = {
  regular: "EBGaramond-Regular",
  bold: "EBGaramond-Bold",
};

export const STORAGE_NAME = {
  ME: "mzansimart:me",
  SETTINGS: "mzansimart:settings",
  LOCATION: "mzansimart:location",
  WISHLIST: "mzansimart:wishlist",
};

export const APP_NAME = "Mzansi Mart";

export const relativeTimeObject = {
  future: "in %s",
  past: "%s",
  s: "now",
  m: "1m",
  mm: "%dm",
  h: "1h",
  hh: "%dh",
  d: "1d",
  dd: "%dd",
  M: "1M",
  MM: "%dM",
  y: "1y",
  yy: "%dy",
};

export const LANDING_MESSAGES = [
  {
    id: 1,
    image: require("@/assets/images/0.png"),
    title: "Welcome to Mzansi Mart!",
    message:
      "Your harvest, your hustle — we're here to help you bring your fresh produce and meat to more markets, faster and smarter.",
  },
  {
    id: 2,
    image: require("@/assets/images/1.jpg"),
    title: "Hello, hardworking farmer!",
    message:
      "Mzansi Mart is built for you — from farm to table, we're making it easier to sell and share what you grow and raise.",
  },
  {
    id: 3,
    image: require("@/assets/images/2.avif"),
    title: "Grow. Sell. Succeed.",
    message:
      "Whether it's vegetables, fruit, or livestock — we help you reach the buyers who value your work. Let's grow your business together.",
  },
];
