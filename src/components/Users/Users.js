import { isEmpty } from "ramda";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AtomSpinner } from 'react-epic-spinners'
import React, { useEffect, Fragment } from 'react';

import {
	Body,
	EmptyList,
	GlobalStyle,
	UsersContent,
	UsersWrapper,
} from "./styled";

import Item from './Item';


const Users = (props) => {
	const { fetching, dispatch, data } = props;

	useEffect(() => {
		dispatch({ type: 'USERS_FETCH' })
	}, []);

	return (
		<Body>
			<GlobalStyle />
			<UsersWrapper>
				{
					fetching ? (
						<AtomSpinner size={150} color="#ff914d" />
					) : (
						<UsersContent>
							<h1>Contact Manager</h1>
							{
								isEmpty(data) ? (
									<EmptyList>
										List is empty :(
									</EmptyList>
								) : (
									<Fragment>
										{
											data.map((user) => (
												<Item key={user.id} {...user} />
											))
										}
									</Fragment>
								)
							}
						</UsersContent>
					)
				}
			</UsersWrapper>
		</Body>
	)
};

Users.propsTypes ={
	data: PropTypes.array.isRequired,
	fetching: PropTypes.bool.isRequired,

	dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	...state.users,
});

export default connect(mapStateToProps)(Users);
