import React from 'react';
import PropTypes from 'prop-types';

import { UserItem } from "./styled";

const Item = ({ name }) => (
	<UserItem>
		{name || 'Не известно'}
	</UserItem>
);

Item.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Item;
