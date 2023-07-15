/**
 * Title: theme
 * Description:
 * Filename: theme.ts
 * Path: /utils/theme.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 15, 2023
 *
 */

import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F6F7FA",
    },
    primary: {
      main: "#22A6B3",
    },
  },
  typography: {
    h3: {
      color: "444",
    },
    h6: {
      color: "#777575",
    },
    body1: {
      color: "#777575",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#082038",
    },
    primary: {
      main: "#38BDF8",
    },
  },
});

export const bookFlight = {
  backgroundColor: "#FFFFFF",
  borderRadius: 3,
  borderLeftStyle: { md: "dotted" },
  borderTopStyle: { xs: "dotted", md: "none" },
  borderLeftColor: "#DDD",
  borderTopColor: "#DDD",
};

export const chooseFlight = {
  backgroundColor: "#FFFFFF",
  borderRadius: 3,
};
