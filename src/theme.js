import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3A97D4",
      contrastText: "#FFFFFF", // White text on a 'primary' background will have good contrast
    },
    secondary: {
      main: "#2EA0D4",
      contrastText: "#FFFFFF", // White text on a 'secondary' background will have good contrast
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF", // Default color for surfaces like cards & paper
    },
    text: {
      primary: "#333333",
      secondary: "#2EA0D4", // For less important text
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2675A6", // Darker hue
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#1D6386", // Darker hue
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#232323",
      paper: "#1D1D1D",
    },
    text: {
      primary: "#CDCDCD",
      secondary: "#7E7E7E",
    },
  },
});
