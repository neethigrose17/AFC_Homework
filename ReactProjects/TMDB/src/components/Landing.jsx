// packages, modules, components
import axios from "axios";
import NavBar from "./NavBar";

// styling
import "../App.css"
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./ui/Theme";


const Landing = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <h1>Welcome to the Movie Database!</h1>
      </ThemeProvider>
    </>
  )
}

export default Landing;
