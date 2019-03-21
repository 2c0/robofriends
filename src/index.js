import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {searchRobots} from './reducers';
import 'tachyons';

const logger = createLogger();

// creating a store with root reducer
const store = createStore(searchRobots, applyMiddleware((logger)));

ReactDOM.render(
    // store is now passed down to a props
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
