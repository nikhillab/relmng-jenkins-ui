import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Main from "./components/Main";

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
