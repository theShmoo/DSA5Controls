import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import DSATooltip from './DSATooltip';

const styles = theme => ({
  link: {
    margin: theme.spacing.unit,
  },
});

function DSALink(props) {
  const { classes, onClick, href, children, tooltip } = props;
  const TT = <Link
      color="primary"
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener"
      className={classes.link}>
      {children}
    </Link>

  if(tooltip)
    return <DSATooltip title={tooltip}>{TT}</DSATooltip>
  else
    return TT;
}

DSALink.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DSALink);
