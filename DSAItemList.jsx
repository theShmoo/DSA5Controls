import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(2),
  }
});

const LeafItem = ({item}) => {
  const {action, name, value, dangerouslysetinnerhtml} = item;
  return <ListItem dense={true}
          divider={true}
          button={action ? true : false}
          onClick={action}>
        {dangerouslysetinnerhtml
          ? <ListItemText secondary={name}>
            <span dangerouslySetInnerHTML={{__html: value}} />
          </ListItemText>
          : <ListItemText secondary={name} primary={value} />
        }
      </ListItem>;
}

LeafItem.defaultProps = {
  dangerouslysetinnerhtml: false,
}

class DSAItemList extends React.Component {

  state = {
    closed: []
  };

  handleClick = (id) => {
    let closed = this.state.closed;
    const i = closed.indexOf(id);
    if(i < 0)
      closed.push(id);
    else
      closed.splice(i, 1);
    this.setState({ closed: closed });
  };

  renderLeafItem(item) {
    if(item.tooltip)
      return <Tooltip title={item.tooltip}>
        <LeafItem item={item} aria-label={item.tooltip}/>
      </Tooltip>
    else
      return <LeafItem item={item}/>
  }

  renderItems(items) {
    const {classes, collapse} = this.props
    return items.map((l, i) => {
      if(l.items !== undefined) {
        const collapseClicked = this.state.closed.includes(i)
        const closed = collapse ? collapseClicked : !collapseClicked;
        return (
          <div key={i}>
            <ListItem button dense={true} onClick={() => this.handleClick(i)}>
              <ListItemText secondary={l.subtitle}>
                <Typography variant="subtitle2" gutterBottom>{l.title}</Typography>
              </ListItemText>
              {closed ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={closed} timeout="auto" unmountOnExit className={classes.nested}>
              <DSAItemList items={l.items} classes={classes}/>
            </Collapse>
          </div>
        );
      }
      else {
        return <div key={i}> {this.renderLeafItem(l)} </div>;
      }
    });
  }

  render() {
    const { classes, items, title } = this.props;
    return (
      <List dense={true} disablePadding={true} className={classes.root}>
        {title && <ListSubheader>{title}</ListSubheader>}
        {this.renderItems(items)}
      </List>
    );
  }
}

DSAItemList.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default withStyles(styles)(DSAItemList);
