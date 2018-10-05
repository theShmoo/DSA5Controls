import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root : {
  }
});

function DSAButton(props) {
  const { classes, onClick, size, children } = props;
  return (
    <Button
      color="primary"
      onClick={onClick}
      size={size}
      className={classes.root}>
      {children}
    </Button>
  );
}

DSAButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DSAButton);
