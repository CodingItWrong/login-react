import React from 'react';
import LoginFormContainer from './LoginFormContainer';

// A generic controller component handling login
// Takes in the login form, the method to use to attempt login, and the logged-in content
export default class Auth extends React.Component {
  state = { loggedIn: !!this.props.initiallyLoggedIn }

  attemptLogin = (loginParams) => {
    // attemptLogin must return a promise that resolves if login succeeds
    return this.props.attemptLogin(loginParams)
      .then((response) => {
        this.setState({ loggedIn: true });
      });
  }

  logOut = () => {
    this.setState({ loggedIn: false });
  }

  renderForm = () => {
    const { attemptLogin } = this;
    const { renderForm } = this.props;

    return (
      <LoginFormContainer
        renderForm={renderForm}
        attemptLogin={attemptLogin}
      />
    );
  }

  render() {
    const { renderLoggedIn } = this.props;
    const { loggedIn } = this.state;
    const { logOut } = this;

    if (loggedIn) {
      return renderLoggedIn({ logOut });
    } else {
      return this.renderForm();
    }
  }
}
