import Immutable from 'immutable';
import immutableize from "@helpers/immutableize";

import * as actionTypes from '@constants/actionTypes';

const initialState = Immutable.fromJS({
	data: [],
	fetching: false,
});


const users = (state = initialState, action) => {
	switch (action.type) {
		
		case actionTypes.USERS_SET_FETCHING_STATUS:
			return state.set('fetching', action.status);
			
		case actionTypes.USERS_SET_DATA:
			return state.merge({
				fetching: false,
				data: action.users,
			});
		
		default:
			return state;
	}
};

export default immutableize(users);
