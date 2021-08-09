import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { clearAuthState, login } from '../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    // // Login using Uncontrolled-Component Method(i.e. getting data from the dom)
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();

    // // Login using Controlled-Component Method(ie. from react state)
    this.state = {
      email: '',
      password: '',
    };
  }

  // this will be executed when login component gets destroyed(i.e. when u leave the page)
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleEmailChange = (e) => {
    //console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    //console.log(e.target.value);
    this.setState({
      password: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log('this.emailInputRef', this.emailInputRef);
    // console.log('this.passwordInputRef', this.passwordInputRef);
    //console.log('this.state', this.state);

    const { email, password } = this.state;

    if (email && password) {
      this.props.dispatch(login(email, password)); // dispatch function will only be accessible if it connected to store using {connect}
    }
  };

  render() {
    const { error, inProgress, isLoggedIn } = this.props.auth;

    if (isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dialog">{error}</div>}
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            //ref={this.emailInputRef}
            onChange={this.handleEmailChange}
            value={this.state.email}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            //ref={this.passwordInputRef}
            onChange={this.handlePasswordChange} // this will be called when there will be some changes in the input box
            value={this.state.password}
            required
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button
              onClick={this.handleFormSubmit}
              disabled={inProgress}
              style={{ background: 'green' }}
            >
              Logging In...
            </button>
          ) : (
            <button onClick={this.handleFormSubmit}>Log In</button>
          )}
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
