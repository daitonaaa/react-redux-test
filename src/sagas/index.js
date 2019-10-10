import api from '@api';
import delay from '@helpers/delay';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { setUsersData, setUsersFetching } from "@actions/users";

function* fetchUsers() {
	yield delay(2000);
	
	try {
		const users = yield call(api.users.getUsers);
		yield put(setUsersData(users.data));
	} catch (err) {
		yield put(setUsersFetching(true));
		console.error(err);
	}
}

function* watchLoadUsers() {
	yield takeEvery('USERS_FETCH', fetchUsers);
}

export default function* rootSaga() {
	yield all([
		watchLoadUsers()
	]);
};
