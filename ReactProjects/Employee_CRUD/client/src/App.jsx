// import packages and modules and components
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Landing from "./components/Landing";
import Table from "./components/Table";
import Error from "./components/Error";
import Navbar from "./components/Navbar";

// styling
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <h1>Employees 'R' Us</h1>
      <Router>
        <Link to="/employee/table">All Employees</Link>
        <Link to="/">Landing Page</Link>
        <Link to="/employee">Error Page</Link>
        <Routes>
          <Route exact path="/" element={<Landing doggy="horse"/>}/>
          <Route path="/employee/table" element={<Table/>}/>
          <Route path="/employee" element={<Error/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;