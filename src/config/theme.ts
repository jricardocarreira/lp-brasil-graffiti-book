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
    fontFamily: {
      body: 'Poppins',
      display: 'Poppins'
    },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          100: "#ffd1ae", 
          200: "#ffb37d", 
          300: "#ff914b", 
          400: "#ff6f24", 
          500: "#F86E00",
          600: "#d76100", 
          700: "#b45400", 
          800: "#923f00", 
          900: "#5e2800",
        },
        text: {
          primary: "#222",
          secondary: "#666",
        },
        background: {
          body: "#ffffff",       
          level1: "#f8f9fa",      
          level2: "#e9ecef",    
          level3: "#dee2e6",     
          popup: "#ffffff",      
          surface: "#f1f3f5",    
          tooltip: "#212529",     
        }
      },
    },
  },
});

export default theme;
