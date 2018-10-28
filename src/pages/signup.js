import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { Component } from 'react';
import axios from 'axios';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
const FormItem = Form.Item;

class HorizontalLoginForm extends React.Component {

  constructor () {
  super()
  this.state = {
    userid: '',
    token: ''
  }
  this.handleSubmit = this.handleSubmit.bind(this)
}



  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        axios.post("http://localhost:8000/users", {
            email: values.userName,
            password: values.password,
            'Content-Type': 'application/x-www-form-urlencoded'
        })
        .then(
          (result) => {
            this.setState({
              userid: result.data.id,
              token: result.data.token
            });
          })
          .catch(err => console.log(err));


      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" >
      <div className="signinto">
      Sign Up
      </div>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Regsiter
          </Button>
        </FormItem>
         <p>{this.state.userid}</p>
         <p>{this.state.token}</p>

      </Form>
    );
  }
}
const Signup = Form.create()(HorizontalLoginForm);
export default Signup;
