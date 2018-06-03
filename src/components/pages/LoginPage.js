import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
      console.log(this.props.authError);
    });
  };
  render() {
    return (
      <div>
        <h1>Login Page</h1>

        <LoginForm submit={this.submit} />
        <Link to="/dashboard">Login</Link>
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
  isLoggedIn: PropTypes.bool.isRequired,
  authError: PropTypes.string
};

LoginPage.defaultProps = {
  authError: ""
};

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
