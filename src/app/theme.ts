import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  colors: {
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
  },
});
