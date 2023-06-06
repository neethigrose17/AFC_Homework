// packages, modules, components
import {useEffect, useState} from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Card from "./Card";

// styling
import "../App.css"
import { ThemeProvider } from "@mui/material";
import theme from "./ui/Theme";

const baseURL = "https://api.themoviedb.org/3"
const nowPlayingURL = "movie/now_playing"

const {VITE_TMDB_API_KEY} = process.env; // API key

const NowPlaying = () => {
  const [cardData, setCardData] = useState([]); // cardData starts empty

  useEffect(() => {
    axios
    .get(`${baseURL}/${nowPlayingURL}?api_key=${VITE_TMDB_API_KEY}`)
    .then(response => {
      setCardData(response.data.results); // this is very similar to the other TMDB
    })
    .catch(err => {
      console.log("Now Playing error", err);
    })
  }, [])

  return (
    // I tried making these divs to make different background images on each page but it doesn't work
    <div className="nowplaying">
      {/* Using the theme to change color of navbar */}
      <ThemeProvider theme={theme}>
        <NavBar />
        <h1>Now Playing</h1>
        {/* sending cardData as info to the Card component in order to create cards */}
        <Card movieArray={cardData}/>
      </ThemeProvider>
    </div>
  )
}

export default NowPlaying;