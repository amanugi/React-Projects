import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// // currying function logger(obj, next, action)
// //logger(obj)(next)(action)
// const logger = function ({dispatch, getState}){
//     return function(next) {
//         return function(action) {
//             //middleware code
//             console.log('ACTION_TYPE = ', action.type);
//             next(action);
//         }
//     }
// }


// Middleware logger function
const logger = ({ dispatch, getState }) => (next) => (action) => {
    // logger code
    if(typeof action !== 'function'){
        console.log('ACTION_TYPE = ', action.type);
    }
    next(action);
}

// // Middleware thunk function
// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//     // thunk code
//     if(typeof action === 'function'){
//         action(dispatch);
//         return;
//     }
//     next(action);
// }


// Creating the store
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
//console.log('store', store);
// console.log('Before state', store.getState());

// // Dispatching the actions to the reducers
// store.dispatch({
//     type: 'ADD_MOVIES',
//     movies: [{name: 'Padman'}]
// });

// console.log('After state', store.getState());


// export const StoreContext = createContext();

// console.log('StoreContext', StoreContext);

// class Provider extends React.Component {
//     render() {
//         const { store } = this.props;
//         return <StoreContext.Provider value = {store}>
//             {this.props.children}
//         </StoreContext.Provider>;
//     }
// }


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,   // Now store is available to app as well as its descendant components
    document.getElementById('root')
);

