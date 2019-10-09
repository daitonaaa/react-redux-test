import { combineReducers } from 'redux';

import users from './users';

export const reducers = {
	users,
};

export default combineReducers({
	...reducers,
});
