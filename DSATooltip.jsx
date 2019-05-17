import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  root: {}
});

function DSATooltip(props) {
  const { classes, children, title } = props;
  return (
      <Tooltip title={title} className={classes.root}>
        {children}
      </Tooltip>
  );
}

DSATooltip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DSATooltip);
