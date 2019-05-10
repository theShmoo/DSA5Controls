import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  content: {
    padding: theme.spacing.unit * 2,
  },
});

function DSAMediaCard(props) {
  const { classes,
    imagesrc,
    imagetitle,
    title,
    content,
    actions,
    children } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={imagesrc}
        title={imagetitle}
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography component="p">
          {content}
        </Typography>
        {children}
      </CardContent>
      { actions &&
        <CardActions>
          {actions}
        </CardActions>
      }
    </Card>
  );
}

DSAMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  imagesrc: PropTypes.string.isRequired,
  imagetitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(DSAMediaCard);
