import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <form className="signup-form">
        <span className="login-signup-header">Signup</span>
        <div className="field">
          <input type="username" placeholder="Username" required />
        </div>
        <div className="field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <button>Signup</button>
        </div>
      </form>
    );
  }
}

export default Signup;
