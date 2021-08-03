import React from 'react';

function Navbar(props) {
  return (
    <nav className="nav">
      <div className="left-div">
        <img
          src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          alt="logo"
        />
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
        <div className="user">
          <img
            src="https://image.flaticon.com/icons/png/128/2922/2922510.png"
            alt="user-dp"
            id="user-dp"
          />
          <span>Peter Parker</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>Login</li>
            <li>Logout</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
