import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        margin: 40,
      },
    },
  },
  h1: {
    baseStyle: {
      margin: 40,
    },
  },
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-fragment)",
  },
  colors: {
    brand: {
      main: "#FFCC12",
      secondary: "#7928CA",
      background: "#252525",
    },
    gray: {
      900: "#141414",
      800: "#1F1F1F",
      700: "#252525",
      600: "#333333",
      500: "#3D3D3D",
      400: "#525252",
      300: "#707070",
      200: "#858585",
      100: "#ADADAD",
    },
    purple: {
      900: "#290D44",
      800: "#3D1466",
      700: "#521B88",
      600: "#6622AA",
      500: "#7928CA",
      400: "#9752E0",
      300: "#B686EA",
      200: "#D6BAF3",
      100: "#F5EEFC",
    },
  },
});

export default theme;
