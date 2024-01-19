import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#4d72d0",
    },
    secondary: {
      main: "#2a3042",
    },
    error: {
      main: "#d02942",
    },
    success: {
      main: "#4aa983",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    fontSize: 13.5,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "14.5px",
          padding: "8px 16px",
          borderRadius: "5px",
          textTransform: "capitalize",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff", // Change this to your desired background color
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#2a3042", // Change this to your desired background color
          color: "#fff",
        },
      },
    },
  },
});

export default theme;
