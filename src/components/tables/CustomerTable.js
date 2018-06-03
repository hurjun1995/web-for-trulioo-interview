/* eslint react/no-array-index-key: 0 */
import React from "react";
import { Checkbox, Table } from "semantic-ui-react";
import PropTypes from "prop-types";

class CustomerTable extends React.Component {
  state = {};

  populateTable = customerData =>
    customerData.map((customer, idx) => (
      <Table.Row key={idx}>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>{customer.lastName}</Table.Cell>
        <Table.Cell>{customer.firstName}</Table.Cell>
        <Table.Cell>{customer.dob}</Table.Cell>
        <Table.Cell>{customer.verified}</Table.Cell>
        <Table.Cell>{customer.lastVerifiedOn}</Table.Cell>
      </Table.Row>
    ));

  render() {
    return (
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Date of Birth</Table.HeaderCell>
            <Table.HeaderCell>Verified</Table.HeaderCell>
            <Table.HeaderCell>Last Verified On</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{this.populateTable(this.props.customerData)}</Table.Body>
      </Table>
    );
  }
}

CustomerTable.propTypes = {
  customerData: PropTypes.arrayOf(PropTypes.object).isRequired
};

CustomerTable.defaultProps = {
  customerData: []
};

export default CustomerTable;
