// packages, modules, components
import NavBar from "./NavBar";

// styling
import "../App.css"
import { ThemeProvider } from "@mui/material";
import theme from "./ui/Theme";

const Error = () => {
  return (
    <div className="error">
      <ThemeProvider theme={theme}>
        <NavBar />
        <h1>Error</h1>
        <h2>Nothing was found.</h2>
        {/* I put the error image here instead of as a background. I think it's funny how the guy in my main background is looking up at it */}
        <img src="https://media.licdn.com/dms/image/C4D12AQFP6Wz8VFo_6Q/article-cover_image-shrink_600_2000/0/1520142441102?e=1691625600&v=beta&t=oZazsDrecvYD8-p3JUYsjF4ewAlB-LPVIA_hOVsXz68" alt="no way sign for error page" height="350"/>
      </ThemeProvider>
    </div>
  )
}

export default Error;
