import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#8b5cf6",
      light: "#a78bfa"
    },
    secondary: {
      main: '#3b82f6'
    },
    background: {
      default: '#121218',
      paper: '#1a1a24',
    },
    text: {
      primary: '#ffffff',
      secondary: '#9ca3af',
    },
    otherColor: {
      main: '#999'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500
    },
    h5: {
      fontWeight: 600
    },
    h6: {
      fontWeight: 600
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#121218',
        },
      },
    },
  },
});
