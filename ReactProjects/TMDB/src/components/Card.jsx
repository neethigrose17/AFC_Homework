import {useState} from 'react';
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
  const [expanded, setExpanded] = useState(false);
  const imageBaseURL = "https://image.tmdb.org/t/p/w500"

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card-container">
    {movieArray.map((el, i) => {
      return (
          <div className="card">
            <Card key={i} sx={{ maxWidth: 200 }}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={<Typography variant="subtitle1">{el.original_title}</Typography>}
                subheader={<Typography variant="subtitle2" color="text.secondary">{el.release_date}</Typography>}
              />
              <CardMedia
                component="img"
                height="300"
                image={`${imageBaseURL}/${el.poster_path}`}
                alt={el.original_title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <Typography variant="body1">
                    Rating: {el.vote_average}
                  </Typography>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <Typography variant="body2">Show Synopsis</Typography>
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
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