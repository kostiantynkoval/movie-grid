import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import Routes from './containers/routes/Routes'

import rootReducer from './store/reducers'
const history = createHistory();
const middleware = routerMiddleware(history);

const store = composeWithDevTools(applyMiddleware(middleware, thunkMiddleware))(
    createStore,
)(rootReducer);

const App = () =>
    (<Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>);

export default App;
