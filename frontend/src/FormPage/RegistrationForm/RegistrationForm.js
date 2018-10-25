import React, { Component } from "react";
import { Form, Icon, Input, Button } from 'antd';

const API_URL = process.env.API_URL;

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "not loaded"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  componentDidMount() {
    const request_url = `${API_URL}` + "/test";
    console.log(request_url);
    fetch(request_url)
      .then(response => response.json())
      .then(this.setState({ response: "I received a message" }))
      .catch(err => console.log(err));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const firstNameError = isFieldTouched('first_name') && getFieldError('first_name');
    const lastNameError = isFieldTouched('last_name') && getFieldError('last_name');

    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={firstNameError ? 'error' : ''}
          help={firstNameError || ''}
        >
          {getFieldDecorator('first_name', {
            rules: [{ required: true, message: 'Please input your first name!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="First Name" />
          )}
        </Form.Item>
        <Form.Item
          validateStatus={lastNameError ? 'error' : ''}
          help={lastNameError || ''}
        >
          {getFieldDecorator('last_name', {
            rules: [{ required: true, message: 'Please input your last name!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Last Name" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(RegistrationForm);

