import React, { Component } from "react";
import RegistrationForm from "./RegistrationForm.js";
import {
  FormWrapper
} from "./HomeStyles.js";

class FormPage extends Component {
  render() {
    return (
      <FormWrapper>
        <RegistrationForm/>
      </FormWrapper>
    );
  }
}

export default FormPage;
