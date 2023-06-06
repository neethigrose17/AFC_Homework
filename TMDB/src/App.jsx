// packages, modules, components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing"
import NowPlaying from "./components/NowPlaying";
import Search from "./components/Search";
import Error from "./components/Error";

// styling
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* these are the routes for different pages */}
          <Route exact path="/" element={<Landing />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
          <Route path="/search" element={<Search />} />
          <Route path="/error" element={<Error />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
