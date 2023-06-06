// import packages and modules and components
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Landing from "./components/Landing";
import Table from "./components/Table";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import {ThemeProvider, Typography, createTheme} from "@mui/material";
import palette from "./components/ui/Theme";

// styling
import './App.css'

const App = () => {
  return (
    <>
      <ThemeProvider theme={createTheme({palette})}>
        <Navbar />
        <Typography
          variant="h2"
          sx={{color: "#ffffff",
              // '&:hover': {backgroundColor: "orangered"}
              }}>
                Employees 'R' Us
        </Typography>
        <Router>
          {/* <Link to="/employee/table">All Employees</Link>
          <Link to="/">Landing Page</Link>
          <Link to="/employee">Error Page</Link> */}
          <Routes>
            <Route exact path="/" element={<Landing/>}/>
            <Route path="/employee/table" element={<Table/>}/>
            <Route path="/employee/new" element={<Form/>}/>
            <Route path="/employee/3" element={<Form/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App;