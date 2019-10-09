import * as actionTypes from '@constants/actionTypes';

export const setUsersData = (users) => ({
	type: actionTypes.USERS_SET_DATA,
	users,
});

export const setUsersFetching = (status) => ({
	type: actionTypes.USERS_SET_FETCHING_STATUS,
});
