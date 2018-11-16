const React = require('react');
const LoginFormContainer = require('./LoginFormContainer');

// A generic controller component handling login
// Takes in the login form, the method to use to attempt login, and the logged-in content
module.exports = class Auth extends React.Component {
  state = { loggedIn: false }

  attemptLogin = (loginParams) => {
    // attemptLogin must return a promise that resolves if login succeeds
    return this.props.attemptLogin(loginParams)
      .then((response) => {
        this.setState({ loggedIn: true });
      });
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
    const { children } = this.props;
    const { loggedIn } = this.state;

    if (loggedIn) {
      return children;
    } else {
      return this.renderForm();
    }
  }
}
