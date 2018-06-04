/* eslint react/no-array-index-key: 0, no-prototype-builtins: 0, react/forbid-prop-types: 0 */
import React from "react";
import { Checkbox, Table, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkBoxToggle } from "../../actions/verify";

const headers = [
  "Last Name",
  "First Name",
  "Date of Birth",
  "Verified",
  "Last Verified On"
];

class CustomerTable extends React.Component {
  state = {};

  populateTableBody = customerData => {
    const retArr = [];
    const keys = Object.keys(customerData);
    keys.forEach(key => {
      if (customerData.hasOwnProperty(key)) {
        const c = customerData[key];
        retArr.push(
          <Table.Row key={key}>
            <Table.Cell collapsing>
              <Checkbox slider onClick={() => this.props.checkBoxToggle(key)} />
            </Table.Cell>
            <Table.Cell>{c.lastName}</Table.Cell>
            <Table.Cell>{c.firstName}</Table.Cell>
            <Table.Cell>{c.dob}</Table.Cell>
            <Table.Cell>
              {c.verified === "true" ? (
                <Icon color="green" name="thumbs up outline" size="large" />
              ) : (
                <Icon color="red" name="thumbs down outline" size="large" />
              )}
            </Table.Cell>
            <Table.Cell>{c.lastVerifiedOn}</Table.Cell>
          </Table.Row>
        );
      }
    });
    return retArr;
  };

  populateTableHeader = strArr =>
    strArr.map((str, idx) => (
      <Table.HeaderCell key={idx}>{str}</Table.HeaderCell>
    ));

  render() {
    return (
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            {this.populateTableHeader(headers)}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.populateTableBody(this.props.customerData)}
        </Table.Body>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  customerData: state.verify.customers
});

CustomerTable.propTypes = {
  customerData: PropTypes.object.isRequired,
  checkBoxToggle: PropTypes.func.isRequired
};

CustomerTable.defaultProps = {
  customerData: {}
};

export default connect(
  mapStateToProps,
  { checkBoxToggle }
)(CustomerTable);
