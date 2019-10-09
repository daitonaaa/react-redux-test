import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Item from './Item';


const Users = (props) => {
	useEffect(() => {
		props.dispatch({ type: 'USERS_FETCH' })
	}, []);

	return (
		<div>
			1
		</div>
	)
};

const mapStateToProps = (state) => ({
	...state.users,
});

export default connect(mapStateToProps)(Users);
