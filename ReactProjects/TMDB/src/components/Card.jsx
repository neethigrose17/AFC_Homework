import {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography} from '@mui/material';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import "../App.css"

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
  const [expandedID, setExpandedID] = useState(-1);
  const imageBaseURL = "https://image.tmdb.org/t/p/w500"

  const handleExpandClick = (i) => {
    setExpandedID(expandedID === i ? -1 : i);
  };

  return (
    <div className="card-container">
    {movieArray.map((el, i) => {
      return (
          <div className="card" key={el.id}>
            <Card data-id={el.id} key={el.id} sx={{ maxWidth: 200 }}>
              <CardHeader sx={{ height: 70 }}
                title={<Typography variant="subtitle1" fontWeight="bold">{el.original_title}</Typography>}
                subheader={<Typography variant="subtitle2" color="text.secondary">{el.release_date}</Typography>}
              />
              <CardMedia
                component="img"
                height="300"
                image={`${imageBaseURL}/${el.poster_path}`}
                alt={el.original_title}
              />
              <CardContent sx={{height: 10}}>
                <Typography variant="body1" color="text.secondary">
                    Rating: {el.vote_average}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  onClick={() => handleExpandClick(i)}
                  aria-expanded={expandedID === i}
                  aria-label="show more"
                >
                  <Typography variant="body2">Show Synopsis</Typography>
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
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