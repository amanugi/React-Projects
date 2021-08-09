import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Page404, Login, Signup } from './';
import { authenticateUser } from '../actions/auth';

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
    const { posts } = this.props;
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
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
