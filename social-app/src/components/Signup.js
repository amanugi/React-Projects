import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signup, startSignup, clearAuthState } from '../actions/auth';

class Signup extends Component {
  constructor(props) {
    super(props);
    // // Signup using Uncontrolled-Component Method(i.e. getting data from the dom)
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();

    // // Signup using Controlled-Component Method(ie. from react state)
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  // this will be executed when signup component gets destroyed(i.e. when u leave the page)
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = this.state;

    if (name && email && password && confirmPassword) {
      this.props.dispatch(startSignup());
      this.props.dispatch(signup(name, email, password, confirmPassword));
    }
  };

  render() {
    const { inProgress, error, isLoggedIn } = this.props.auth;

    if (isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <form className="login-form">
        <span className="login-signup-header">Signup</span>
        {error && <div className="alert error-dialog">{error}</div>}
        <div className="field">
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => this.handleInputChange('name', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => this.handleInputChange('email', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => this.handleInputChange('password', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) =>
              this.handleInputChange('confirmPassword', e.target.value)
            }
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button
              onClick={this.onFormSubmit}
              disabled={inProgress}
              style={{ background: 'green' }}
            >
              Signing Up...
            </button>
          ) : (
            <button onClick={this.onFormSubmit}>Signup</button>
          )}
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Signup);
