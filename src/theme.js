import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#1760a5",
      light: "#00d4ff"
    },
    secondary: {
      main: '#15c630'
    },
    background: {
      default: '#0a1628',
      paper: '#0f2744',
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
    },
    otherColor: {
      main: '#999'
    }
  },
  typography: {
    fontFamily: '"Outfit", "Roboto", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0a1628',
        },
      },
    },
  },
});
