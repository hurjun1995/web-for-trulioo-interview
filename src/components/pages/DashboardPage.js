/* eslint react/forbid-prop-types: 0 */
import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import MenuBar from "../menu/MenuBar";
import CustomHeader from "../messages/CustomHeader";
import CustomerTable from "../tables/CustomerTable";
import { setCustomersData, verify } from "../../actions/verify";
import "../css/DashboardPage.css";

class DashboardPage extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.verifyAllCustomers = this.verifyAllCustomers.bind(this);
    this.verifyCheckedCustomers = this.verifyCheckedCustomers.bind(this);
  }

  componentDidMount() {
    this.props.setCustomersData(this.props.user.customerId);
  }

  verifyAllCustomers() {
    const clonedCustomerData = Object.assign({}, this.props.customerData);
    this.props.verify(clonedCustomerData);
  }

  verifyCheckedCustomers() {
    const { customerData, checkedCustomersId } = this.props;
    const clonedCustomerData = Object.assign({}, customerData);
    const clonedCheckedCustomersId = checkedCustomersId.slice(0);
    this.props.verify(clonedCustomerData, clonedCheckedCustomersId);
  }

  render() {
    const { user } = this.props;
    const userGreeting = `Welcome, ${user.name}!`;
    return (
      <div>
        <MenuBar userGreeting={userGreeting} history={this.props.history} />
        <div className="VerfiyOptionContainer">
          <CustomHeader
            iconName="user"
            headerText="Customer Overview"
            subHeaderText="Manage your customers"
            style={{ marginLeft: 15 }}
          />
          <Button
            style={{ marginLeft: 30, padding: 15 }}
            color="teal"
            onClick={this.verifyCheckedCustomers}
          >
            Verify Selected Customers
          </Button>
          <Button
            style={{ marginLeft: 15, padding: 15 }}
            color="teal"
            onClick={this.verifyAllCustomers}
          >
            Verify All Customers
          </Button>
        </div>
        <CustomerTable />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  checkedCustomersId: state.verify.checkedCustomersId,
  customerData: state.verify.customers
});

DashboardPage.propTypes = {
  user: PropTypes.object.isRequired,
  checkedCustomersId: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCustomersData: PropTypes.func.isRequired,
  customerData: PropTypes.object.isRequired,
  verify: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

DashboardPage.defaultProps = {
  user: {},
  checkedCustomersId: [],
  customerData: {}
};

export default connect(
  mapStateToProps,
  { setCustomersData, verify }
)(DashboardPage);
