import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 250,
  },
});

function DSAQSTable(props) {

const { classes, info } = props;

  const rows = info.map((row, i) => {
    return <TableRow key={i}>
      <TableCell>{i+1}</TableCell>
      <TableCell>{row}</TableCell>
    </TableRow>
  });

  return (
    <Table className={classes.table} padding="dense">
      <TableHead>
        <TableRow>
          <TableCell component="th">QS</TableCell>
          <TableCell component="th">Vorteil</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows}
      </TableBody>
    </Table>
  );
}

DSAQSTable.propTypes = {
  classes: PropTypes.object.isRequired,
  info: PropTypes.array.isRequired,
};

export default withStyles(styles)(DSAQSTable);
