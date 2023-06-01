import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

export default function RecipeReviewCard(props) {
  const {movieArray} = props;
  const [expanded, setExpanded] = React.useState(false);
  const imageBaseURL = "https://image.tmdb.org/t/p/w500"

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    movieArray.map((el, i) => {
      return (
        <Card key={i} sx={{ maxWidth: 400 }}>
          <CardHeader
            // avatar={
            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="movie">
            //   </Avatar>
            // }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={el.original_title}
            subheader={`Released ${el.release_date}`}
          />
          <CardMedia
            component="img"
            height="600"
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
      )
    })
  );
}