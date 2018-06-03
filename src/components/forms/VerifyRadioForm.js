import React from "react";
import { Form, Radio } from "semantic-ui-react";

class VerifyRadioForm extends React.Component {
  state = {
    strict: true
  };

  handleChange = () => {
    this.setState(prevState => ({ strict: !prevState.strict }));
  };

  render() {
    return (
      <Form style={{ marginLeft: 20 }}>
        <Form.Field>
          <Radio
            toggle
            label="strict verification"
            name="radio"
            value="strict verification"
            checked={this.state.strict}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    );
  }
}

export default VerifyRadioForm;
