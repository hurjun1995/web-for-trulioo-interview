import React from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";

const MenuBar = props => (
  <Menu secondary size="huge">
    <Menu.Item header name="WhoAreYou" />
    <Menu.Menu position="right">
      <Menu.Item name={props.userGreeting} />
      <Menu.Item name="logout" />
    </Menu.Menu>
  </Menu>
);

MenuBar.propTypes = {
  userGreeting: PropTypes.string.isRequired
};

MenuBar.defaultProps = {
  userGreeting: ""
};

export default MenuBar;
