import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  grid: {
    spacing: theme.spacing(2)
  },
});

function DSAGridPure(props) {
  const { classes, children } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </div>
  );
}

function DSAGridItemPure(props) {
  const { children, xs, sm, md, lg, xl } = props;
  return (
    <Grid item
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}>
      {children}
    </Grid>
  );
}

function DSAGridRowPure(props) {
  const { children} = props;
  return (
    <Grid item xs={12}>
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
