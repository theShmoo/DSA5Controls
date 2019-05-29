import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root : {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  }
});

function DSAInfoBox(props) {
  const { classes, children, title, text } = props;
  return (
    <Paper square elevation={4} className={classes.root}>
      {title && <Typography variant="h5" component="h3">{title}</Typography>}
      {text && <Typography component="p">{text}</Typography>}
      {children}
    </Paper>
  );
}

DSAInfoBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DSAInfoBox);
