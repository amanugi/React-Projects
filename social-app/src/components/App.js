import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Page404, Login, Signup } from './';
import { authenticateUser } from '../actions/auth';

const Settings = () => <div>Setting</div>;

const PrivateRoute = (privateRouteProps) => {
  const { isLoggedIn, path, component: Component } = privateRouteProps;
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

class App extends React.Component {
  // when page/component gets loaded for the first time
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token); // to decode the token
      //console.log('user', user);
      //dispatching authenticateUser action
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
    }
  }

  render() {
    //console.log('PROPS', this.props);
    const { posts, auth } = this.props;
    return (
      <Router>
        <div className="App">
          <Navbar />
          {/* props are passed internally to all the route component internally by react-route  */}
          {/* Switch renders only one component based on matched path or component */}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            {/* Users who are logged in can only access the private routes */}
            <PrivateRoute
              path="/settings"
              component={Settings}
              isLoggedIn={auth.isLoggedIn}
            />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
