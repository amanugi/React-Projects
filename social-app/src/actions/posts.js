import { APIUrls } from '../helpers/urls';
import { UPDATE_POSTS } from './actionTypes';

export function fetchPosts() {
  // dispatch will be handled by thunk
  return (dispatch) => {
    const url = APIUrls.fetchPosts();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts)); // dispatching action to add posts to the store
      });
  };
}

// updatePosts is an action
export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
