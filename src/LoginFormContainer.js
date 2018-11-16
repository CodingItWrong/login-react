import React, { Component } from 'react';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    error: null,
  }

  handleChange = field => text => {
    this.setState({
      [field]: text,
      error: false,
    });
  }

  handleLogIn = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    // attemptLogin must return a promise that rejects with an error message string if login fails
    this.props.attemptLogin({ username, password })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { handleLogIn, handleChange } = this;
    const { renderForm } = this.props;
    const { username, password, error } = this.state;

    return renderForm({
      username,
      password,
      error,
      handleLogIn,
      handleChange,
    });
  }
}
