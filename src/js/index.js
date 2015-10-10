const React = require('react/addons');
const App = require('./screens/App');

const mountNode = document.querySelector('#mountNode');
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const Link = ReactRouter.Link

import createHashHistory from 'history/lib/createHashHistory';
// import createStoreInstance from './shared/store/createStore';

import { Provider } from 'react-redux';

const history = createHashHistory();
const store = {} //createStoreInstance({});

React.render((
  <Provider store={store}>
  {()=>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  }
  </Provider>
), mountNode);
