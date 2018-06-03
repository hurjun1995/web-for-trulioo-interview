import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";

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
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
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
