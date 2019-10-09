import axios from 'axios';

export default {
	
	getUsers: () => (
		axios.get('https://jsonplaceholder.typicode.com/users')
	),
};
