import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    // // Login using Uncontrolled-Component Method(i.e. getting data from the dom)
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();

    // // Login using Controlled-Component Method(ie. from react state)
    this.state = {
      email: '',
      paswword: '',
    };
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
    console.log('this.state', this.state);
  };

  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
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
            onChange={this.handlePasswordChange} // this will be called when there will bws ome changes in the input box
            value={this.state.password}
            required
          />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
