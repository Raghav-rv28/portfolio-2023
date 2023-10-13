import { Titan_One } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const titanOne = Titan_One({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#858585",
    },
  },
  typography: {
    fontFamily: titanOne.style.fontFamily,
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#151515",
    },
  },
  typography: {
    fontFamily: titanOne.style.fontFamily,
  },
});

export default darkTheme;
