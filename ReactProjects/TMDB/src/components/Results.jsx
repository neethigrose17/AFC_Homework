// packages, modules, components
import {useEffect, useState} from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Card from "./Card";

// styling
import "../App.css"
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./ui/Theme";

const baseURL = "https://api.themoviedb.org/3"
const nowPlayingURL = "movie/now_playing"
const searchURL = "search/movie"
const {VITE_TMDB_API_KEY} = process.env;

// a.	GET /movie/now_playing 
// b.	GET /search/movie

const Results = () => {
  const [cardData, setCardData] = useState([]); // cardData starts empty

  useEffect(() => {
    axios
    .get(`${baseURL}/${nowPlayingURL}?api_key=${VITE_TMDB_API_KEY}`)
    .then(response => {
      // console.log(response);
      console.log(response.data.results);
      setCardData(response.data.results);
    })
    .catch(err => {
      console.log("Now Playing error", err);
    })
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <h1>Now Playing</h1>
        <Card movieArray={cardData}/>
      </ThemeProvider>
    </>
  )
}

export default Results;