// packages, modules, components
import NavBar from "./NavBar";
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

// styling
import "../App.css"
import { ThemeProvider } from "@mui/material";
import theme from "./ui/Theme";


const Landing = () => {
  const navigate = useNavigate(); // this allows redirecting to the Now Playing page
  // this function redirects to the now playing page when you click the button
  const handleClick = () => {
    navigate({
      pathname: "/nowplaying"
    })
  }
  return (
    <div className="landing">
      <ThemeProvider theme={theme}>
        <NavBar />
        <h1>Welcome to the Movie Database!</h1>
        {/* Added styling to move the button */}
        <Button variant="contained" sx={{top: 80}} onClick={handleClick}>See Movies Playing Now</Button>
      </ThemeProvider>
    </div>
  )
}

export default Landing;
