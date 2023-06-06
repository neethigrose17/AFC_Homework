// packages, modules, components
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// styling
import "../App.css"

// I used the RecipeReviewCard from MUI as a template for this. Had to tweak it quite a bit. I removed unnecessary buttons, changed the size of the cards, and added margins. I also had to spend a while figuring out how to make the synopsis drop down work correctly.

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MovieCard(props) {
  const {movieArray} = props; 
  // this is necessary because props is an object but when I do this it makes movieArray into an array
  const [expandedID, setExpandedID] = useState(-1);
  // originally this looked different, but when I clicked one "show synopsis" it would open all of them. I had to do some digging online to figure out how to fix this.
  const imageBaseURL = "https://image.tmdb.org/t/p/w500"

  // By using i in this function, I was able to expand only the card that was clicked.
  const handleExpandClick = (i) => {
    setExpandedID(expandedID === i ? -1 : i);
  };

  return (
    <div className="card-container">
    {movieArray.map((el, i) => {

      // this is how I added the image for if there is no poster image
      let posterPath;
      if (el.poster_path !== null) {
        posterPath = `${imageBaseURL}/${el.poster_path}`;
      } else {
        posterPath = "https://cdn.pixabay.com/photo/2017/06/02/22/01/dog-2367414_1280.png"
      }

      return (
          <div className="card" key={el.id}>
            <Card data-id={el.id} key={el.id} sx={{ maxWidth: 200 }}>
              <CardHeader sx={{ height: 70 }}
                // I messed around with the styling here a little
                title={<Typography variant="subtitle1" fontWeight="bold">{el.original_title}</Typography>}
                subheader={<Typography variant="subtitle2" color="text.secondary">{el.release_date}</Typography>}
              />
              <CardMedia
                component="img"
                height="300"
                image={posterPath} // this uses the posterPath variable to display the poster if available, or my movie dog if not
                alt={el.original_title}
              />
              <CardContent sx={{height: 10}}>
                <Typography variant="body1" color="text.secondary">
                    Rating: {el.vote_average}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                // I had to change this section and pass i to handleExpandClick in order to open only the card that is clicked on
                  onClick={() => handleExpandClick(i)}
                  aria-expanded={expandedID === i}
                  aria-label="show more"
                >
                  <Typography variant="body2">Show Synopsis</Typography>
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              {/* I put expandedID === i here in order to fix the drop down issue */}
              <Collapse id={el.id} in={expandedID === i} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{el.overview}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
      )
    })}
    </div>
  );
}