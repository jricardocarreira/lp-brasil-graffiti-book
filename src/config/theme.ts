import { extendTheme } from "@mui/joy";

const theme = extendTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1536,
    },
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          50: "#f5eefb",
          100: "#efe5f8",
          200: "#dfccf2",
          300: "#c5a0e7",
          400: "#9553d3",
          500: "#6d1fb7",
          600: "#602696",
          700: "#481d70",
          800: "#28103e",
          900: "#140820",
        },
        // background: {
        //   body: "#060909",
        //   level1: "#171d1d",
        //   level2: "#313c3c",
        //   level3: "#666f6f",
        //   popup: "#060909",
        //   surface: "#171d1d",
        //   tooltip: "#666f6f",
        // },
      },
    },
  },
});

export default theme;
