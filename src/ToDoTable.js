import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class ToDoTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [1],
    };
  }

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  buildTableBodyRow = (x, i, header) =>
    <TableRow key={`tr-${i}`} selected={this.isSelected(i)}>
      {header.map((y, j) =>
        <TableRowColumn key={`trc-${j}`}>
          {x[y.propName]}
        </TableRowColumn>
      )}
    </TableRow>;

  render() {
    return (
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            {this.props.header.map((x, i) =>
              <TableHeaderColumn key={`thc-${i}`}>
                {x.label}
              </TableHeaderColumn>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.props.data.map((x, i) => this.buildTableBodyRow(x, i, this.props.header))}
        </TableBody>
      </Table>
    );
  }
}
