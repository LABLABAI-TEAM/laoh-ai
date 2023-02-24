import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles/createTheme";
import { orange } from "@mui/material/colors";

const BLACK = "#000";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      // default: "#1F1D2B",
      default: "#252836",
      paper: "#000",
    },
    primary: {
      main: "#1F1D2B",
      contrastText: BLACK,
      light: BLACK,
      dark: "#fff",
    },
    secondary: {
      main: "#1F1D2B",
      light: "#EB966A",
    },
  },
};
const MainTheme = createTheme({
  palette: {
    primary: {
      main: "#6672e5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#7f15d1",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
});

MainTheme.typography.h3 = {
  fontSize: "3rem",
  [MainTheme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
  [MainTheme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
};
export { lightThemeOptions };
