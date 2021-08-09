import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#F2C8A2", dark: "#F2B5A7", light: "#F2D194" },
    secondary: {
      dark: "#F29BC4",
      main: "#F2A0B6",
      light: "#e3b3be"
    },
    textPrimary: "black"
  },
});

export default theme;
