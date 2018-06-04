import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "../forms/LoginForm";
import CustomHeader from "../messages/CustomHeader";
import { login } from "../../actions/auth";
import "../css/LoginPage.css";

class LoginPage extends React.Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
  }
  submit = data => {
    this.props.login(data).then(() => {
      if (this.props.isLoggedIn) {
        this.props.history.push("/dashboard");
      }
    });
  };
  render() {
    return (
      <div className="LoginPageContainer">
        <div className="LoginFormContainer">
          <CustomHeader
            iconName="question"
            headerText="Who Are You"
            subHeaderText="For Trulioo Interview"
          />
          <LoginForm submit={this.submit} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user,
  authError: state.auth.authError
});

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
