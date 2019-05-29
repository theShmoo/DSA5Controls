import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '90%',
  }
});

function DSASearchField(props) {
  const {label,
    placeholder,
    classes,
    helperText,
    value,
    onChange} = props;
  return <TextField
        id="standard-search"
        label={label}
        placeholder={placeholder}
        helperText={helperText}
        type="search"
        className={classes.textField}
        margin="normal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
}

DSASearchField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DSASearchField);
