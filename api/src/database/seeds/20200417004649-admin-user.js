const bcrypt = require('bcryptjs');

module.exports = {
	up: QueryInterface => {
		return QueryInterface.bulkInsert(
			'users',
			[
				{
					name: 'Cristian Silva',
					email: 'cristian123@fastdev.com',
					password_hash: bcrypt.hashSync('12345', 8),
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	down: () => {},
};
