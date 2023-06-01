// packages, modules, components
import axios from "axios";
import NavBar from "./NavBar";

// styling
import "../App.css"
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./ui/Theme";


const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <h1>I am the landing page</h1>
      </ThemeProvider>
    </>
  )
}

export default App;
