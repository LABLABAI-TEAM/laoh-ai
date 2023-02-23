import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles/createTheme";
import { orange } from "@mui/material/colors";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      // default: orange[800],
      default: "#1F1D2B",
    },
    primary: {
      main: "#1F1D2B",
    },
    secondary: {
      main: "#1F1D2B",
    },
  },
};

export { lightThemeOptions };
