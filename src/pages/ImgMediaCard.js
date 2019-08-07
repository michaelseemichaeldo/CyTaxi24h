import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import slide_one from "../resources/images/14425012231.jpg";
import slide_two from "../resources/images/14425012232.jpg";
import slide_three from "../resources/images/14425012233.jpg";
import slide_four from "../resources/images/14425012234.jpg";
import slide_five from "../resources/images/14425012235.jpg";
import slide_six from "../resources/images/14425012236.jpg";
import slide_seven from "../resources/images/14425012237.jpg";
import slide_eight from "../resources/images/14425012238.jpg";
import slide_nine from "../resources/images/14425012239.jpg";
import slide_ten from "../resources/images/144250122310.jpg";
import slide_eleven from "../resources/images/1442501223.jpg";
import slide_twelve from "../resources/images/14425013031.jpg";
import slide_thirteen from "../resources/images/14425013032.jpg";
import slide_fourteen from "../resources/images/14425013033.jpg";
import '../resources/styles.css';


const styles = {
  card: {
    maxWidth: 345,
    margin: 20
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (

    <Grid container justify="center" style={{"padding-top":"10px"}}>

    <Card className={classes.card}>

        <CardMedia
          component="img"
          alt="Nissi Beach"
          className={classes.media}
          height="200"
          image={slide_one}
          title="Nissi Beach"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
          Ayia Napa
          </Typography>
          <Typography component="p">
            Blablabla
          </Typography>
        </CardContent>

      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>

    <span>
    <Card className={classes.card}>
    
<CardMedia
  component="img"
  alt="Necropolis"
  className={classes.media}
  height="200"
  image={slide_two}
  title="Necropolis"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="h4">
  Kyrenia Harbour 1

  </Typography>
  <Typography component="p">
  Dating back to blablbal blablabla blablab
  </Typography>
</CardContent>

{/* <CardActions>
<Button size="small" color="primary">
  Share
</Button>
<Button size="small" color="primary">
  Learn More
</Button>
</CardActions> */}
</Card>
</span>
<Card className={classes.card}>

        <CardMedia
          component="img"
          alt="Petra tou Romiou"
          className={classes.media}
          height="200"
          image={slide_three}
          title="Petra tou Romiou"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
          Kyrenia Sea View

          </Typography>
          <Typography component="p">
            This large rock formation off a blbablb beach is the blablbalbl.
          </Typography>
        </CardContent>
{/* 
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
   
    </Grid>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
