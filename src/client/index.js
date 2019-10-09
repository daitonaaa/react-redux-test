import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import * as serviceWorker from '../serviceWorker';

import rootSaga from "@sagas";
import Users from '@components/Users';

const store = configureStore(window.__INITIAL_STATE__ || {});
store.runSaga(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<Users />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
