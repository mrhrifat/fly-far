/**
 * Title: App
 * Description:
 * Filename: App.tsx
 * Path: /src/App.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Jul 16, 2023
 *
 */

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./utils/data";
import { darkTheme, lightTheme } from "./utils/theme";
import { Home } from "./components";

const App = () => {
  return (
    <ThemeProvider theme={theme === "LIGHT" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Home />
      </Container>
    </ThemeProvider>
  );
};

export default App;
