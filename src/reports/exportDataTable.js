import React, { Fragment, Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import Checkbox from '@material-ui/core/Checkbox'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import { lighten } from '@material-ui/core/styles/colorManipulator';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 920,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});




const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight: {
    color: theme.palette.secondary.main,
    backgroundColor: lighten(theme.palette.secondary.light, 0.85),
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});
class ExportTableToolbar extends Component {
  state = {
    anchorEl: null,
  };

  handleMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };
  
  render () {
    const { anchorEl } = this.state;
    const { classes, header, hiddenCols, changeHiddenCols } = this.props;
    const isMenuOpen = Boolean(anchorEl);

    
    

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        {
          header.map((item) => (
            <MenuItem key={item.key}>
              <Checkbox
                checked={!hiddenCols[item.key]}
                onChange={() => { changeHiddenCols(item.key) }}
                value={item.key}
                indeterminate
              />
              {item.title}
            </MenuItem>
          ))
        }
      </Menu>
    );

    return (
      <Toolbar
        className={classes.root}
      >
        <div className={classes.actions}>
          <Tooltip title="viewColumns">
            <IconButton 
              aria-label="viewColumns"
              onClick={this.handleMenuOpen}
            >
              <ViewColumnIcon />
            </IconButton>
          </Tooltip>
          {renderMenu}
        </div>
      </Toolbar>
    );
  }

};

const EnhancedExportTableToolbar = withStyles(toolbarStyles)(ExportTableToolbar);


class ExportDataTable extends Component {
  state = {
    hiddenCols: {},
  };
  changeHiddenCols = (key) => {
    const { hiddenCols } = this.state;
    const cloneHiddenCols = {
      ...hiddenCols,
    };

    if (cloneHiddenCols[key]) {
      cloneHiddenCols[key] = false;
    } else {
      cloneHiddenCols[key] = true;
    }

    this.setState({ hiddenCols: cloneHiddenCols });
  };

  renderHeaderCells(header) {
    const { hiddenCols } = this.state;
    const filterHeader = header.filter((item) => (!hiddenCols[item.key]));

    return filterHeader.map((item) => (
      <TableCell key={item.key} padding="none"> {item.title } </TableCell>
    ));
  }

  renderRowCells(header, row) {
    const { hiddenCols } = this.state;
    const filterHeader = header.filter((item) => (!hiddenCols[item.key]));
    
    const cells = filterHeader.map((item) => (
      <TableCell key={item.key}> {row.data[item.key] } </TableCell>
    ));

    return (
      <TableRow key={row.xAxis}>
        <TableCell component="th" scope="row" key="placeholder"> 
          {row.xAxis} 
        </TableCell>
        {cells}
      </TableRow>
    );
  }
  render() {
    const { classes, record } = this.props;
    const { hiddenCols } = this.state;

    let hasData = false;

    let rows = [];
    let header = [];

    if (record.exportTable && record.exportTable.header && record.exportTable.rows) {
      hasData = true;
      header = record.exportTable.header;
      rows = record.exportTable.rows;
    }

    if (!hasData) {
      return (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell> NOTHING </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      )
    }

    return (
      <Fragment>
        <Paper className={classes.root}>
          <EnhancedExportTableToolbar 
            header={header} 
            hiddenCols={hiddenCols} 
            changeHiddenCols={this.changeHiddenCols}
          />
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell key='placeholder' />
                  {this.renderHeaderCells(header)}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return this.renderRowCells(header, row);
                })}
              </TableBody>
            </Table>
          </div>
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(ExportDataTable);
