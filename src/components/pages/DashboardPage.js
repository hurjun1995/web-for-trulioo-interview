/* eslint-disable*/
import React from "react";
import { connect } from "react-redux";
import { Input, Menu, Button, Grid } from "semantic-ui-react";
import MenuBar from "../menu/MenuBar";
import VerityRadioForm from "../forms/VerifyRadioForm";
import CustomerTable from "../tables/CustomerTable";
import "../css/DashboardPage.css";

const mockCustomers = require("../../mockData/mockCustomers");
console.log(mockCustomers);

class DashboardPage extends React.Component {
  state = {};

  fetctCustomers(customerId) {
    this.setState({
      customerData: mockCustomers[customerId]
    });
  }

  componentWillMount() {
    this.fetctCustomers(this.props.user.customerId);
  }

  render() {
    const { user } = this.props;
    // const userGreeting = "Welcome, " + user.name + "!";
    const userGreeting = "Welcome";
    return (
      <div>
        <MenuBar userGreeting={userGreeting} />
        <div className="VerfiyOptionContainer">
          <VerityRadioForm />
          <Button style={{ marginLeft: 20 }} color="teal">
            Verify Selected Customers
          </Button>
          <Button style={{ marginLeft: 10 }} color="teal">
            Verify All Customers
          </Button>
        </div>
        <CustomerTable customerData={this.state.customerData} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  null
)(DashboardPage);
