import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root : {}
});

function DSAButton(props) {
  const { classes } = props;
  return (
    <Button
      color="primary"
      className={classes.root}
      {...props} />
  );
}

DSAButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

DSAButton.defaultTypes = {
  size: "small",
};

export default withStyles(styles)(DSAButton);
