import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { Component } from 'react';
import axios from 'axios';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
const FormItem = Form.Item;

class HorizontalLoginForm extends React.Component {

constructor () {
  super()
  this.state = {
    msg: 'No account? register now!'
  }
  this.handleSubmit = this.handleSubmit.bind(this)
}




  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.post("http://localhost:8000/users/login", {
            email: values.userName,
            password: values.password,
            'Content-Type': 'application/x-www-form-urlencoded'
        })
        .then(
          (result) => {console.log(result.data.id);
            this.props.history.push('/currencies');
          })
          .catch(err => this.setState({
              msg: 'email or password not right'
          }));
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" >
      <div className="signinto">
      Sign In
      </div>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your email!' }],
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
            Log in
          </Button>
          <br/>
          <Link to="/signup" className="navsignup"> <p>{this.state.msg}</p></Link>
        </FormItem>
      </Form>
    );
  }
}
const Signin = Form.create()(HorizontalLoginForm);
export default Signin;
