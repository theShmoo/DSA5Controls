import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1,
  }
};

function DSAGridPure(props) {
  const { classes, children } = props;
  return (
    <Grid container
      justify="center"
      alignItems="center"
      spacing={16}
      className={classes.root}>
      {children}
    </Grid>
  );
}

function DSAGridItemPure(props) {
  const { classes, children, xs, sm, md, lg, xl } = props;
  return (
    <Grid item
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      className={classes.root}>
      {children}
    </Grid>
  );
}

function DSAGridRowPure(props) {
  const { classes, children} = props;
  return (
    <Grid item xs={12} className={classes.root}>
      {children}
    </Grid>
  );
}

DSAGridPure.propTypes = {
  classes: PropTypes.object.isRequired
};

DSAGridItemPure.propTypes = {
  classes: PropTypes.object.isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number
};

DSAGridRowPure.propTypes = {
  classes: PropTypes.object.isRequired,
};

const DSAGrid = withStyles(styles)(DSAGridPure);
const DSAGridItem = withStyles(styles)(DSAGridItemPure);
const DSAGridRow = withStyles(styles)(DSAGridRowPure);

export {
  DSAGrid,
  DSAGridItem,
  DSAGridRow
};
