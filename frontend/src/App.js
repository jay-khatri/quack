import React, { Component } from "react";
import RegistrationForm from "./RegistrationForm.js";
import FormWrapper from "./FormWrapper.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <FormWrapper>
          <RegistrationForm/>
        </FormWrapper>
      </React.Fragment>
    );
  }
}

export default App;
