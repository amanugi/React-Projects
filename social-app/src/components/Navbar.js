import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutUser } from '../actions/auth';

class Navbar extends React.Component {
  //Remove the token after logout
  logOut = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logOutUser());
  };

  render() {
    const { auth } = this.props;
    return (
      <nav className="nav">
        <div className="left-div">
          <Link to="/">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="search-container">
          <img
            className="search-icon"
            src="https://img-premium.flaticon.com/png/128/3308/premium/3308543.png?token=exp=1627974854~hmac=9f70a8eb9359f59417d1c681b07a05af"
            alt="search-icon"
          />
          <input placeholder="Search" />

          <div className="search-results">
            <ul>
              <l1 className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/png/128/2922/2922510.png"
                  alt="user-dp"
                />
                <span>Peter Parker</span>
              </l1>
              <l1 className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/png/128/2922/2922510.png"
                  alt="user-dp"
                />
                <span>Peter Parker</span>
              </l1>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          {auth.isLoggedIn && (
            <div className="user">
              <img
                src="https://image.flaticon.com/icons/png/128/2922/2922510.png"
                alt="user-dp"
                id="user-dp"
              />
              <span>{auth.user.name}</span>
            </div>
          )}
          <div className="nav-links">
            <ul>
              {!auth.isLoggedIn && (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
              {!auth.isLoggedIn && (
                <li>
                  <Link to="/signup">Register</Link>
                </li>
              )}
              {auth.isLoggedIn && <li onClick={this.logOut}> Logout</li>}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Navbar);
