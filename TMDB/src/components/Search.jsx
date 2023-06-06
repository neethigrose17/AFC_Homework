// packages, modules, components
import {useEffect, useState} from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Card from "./Card";
import {useNavigate, useSearchParams} from "react-router-dom";

// styling
import "../App.css"
import { ThemeProvider } from "@mui/material";
import theme from "./ui/Theme";

const baseURL = "https://api.themoviedb.org/3"

const {VITE_TMDB_API_KEY} = process.env;

const Search = () => {
  // I looked online for how to pass information from the search bar to the search page and it advised the createSearchParams and useSearchParams functions
  const [searchstring] = useSearchParams();
  const [cardData, setCardData] = useState([]); // cardData starts empty
  const searchURL = `search/movie?query=${searchstring.get("id")}` // searchstring.get("id") returns the text typed into the search box

  const navigate = useNavigate(); // this allows redirecting to the error page if necessary

  useEffect(() => {
    axios
    .get(`${baseURL}/${searchURL}&api_key=${VITE_TMDB_API_KEY}`)
    .then(response => {
      // if there are no results it navigates to the error page
      if (response.data.results.length !== 0) {
        setCardData(response.data.results);
      } else {
          navigate({
            pathname: "/error"
          })
      }
    })
    .catch(err => {
      console.log("Search error", err);
    })
  }, [searchstring]) // I have to put searchstring in here so that the search box works from the search results page. Otherwise it works on every page except the results page.

  return (
    <div className="search">
      <ThemeProvider theme={theme}>
        <NavBar />
        <h1>Search Results</h1>
        {/* This is the same way the Now Playing page works by passing cardData to the Card component */}
        <Card movieArray={cardData}/>
      </ThemeProvider>
    </div>
  )
}

export default Search;