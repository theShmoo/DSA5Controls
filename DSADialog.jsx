import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const styles = {
  root: {}
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
};

function DSADialog(props) {
  const { classes, handleClose, open, title, actions, children } = props;
  return (
    <Dialog
      classes={classes}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      {title ? <DialogTitle id="alert-dialog-slide-title">
          {title}
        </DialogTitle>
        : ""}
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {children}
        </DialogContentText>
      </DialogContent>
      {actions ? <DialogActions>
          {actions}
        </DialogActions>
        : ""}
    </Dialog>
  );
}

DSADialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DSADialog);
