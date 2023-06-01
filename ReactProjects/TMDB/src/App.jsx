// packages, modules, components
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Landing from "./components/Landing"
import Results from "./components/Results";
import Error from "./components/Error";

// styling
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/results" element={<Results />} />
          <Route path="/error" element={<Error />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
