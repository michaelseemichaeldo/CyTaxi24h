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
import image_one from "../resources/images/Nissi_Beach_Agia_Napa.jpg";
import image_two from "../resources/images/Necropolis.jpg";
import image_three from "../resources/images/Petra-tou-Romiou-10200.jpg";
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
          image={image_one}
          title="Nissi Beach"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
            Nissi Beach
          </Typography>
          <Typography component="p">
            This idyllic stretch of sand beach has earned a blue flag designation for its clean, aqua waters.
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
  image={image_two}
  title="Necropolis"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="h4">
  Large, ancient necropolis with tombs 
  </Typography>
  <Typography component="p">
  Dating back to 4th century BCE, this large necropolis features underground tombs carved out of rock.
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
          image={image_three}
          title="Petra tou Romiou"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
            Petra tou Romiou
          </Typography>
          <Typography component="p">
            This large rock formation off a pebbly beach is the birthplace of Aphrodite in Greek mythology.
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
