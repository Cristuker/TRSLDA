module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('recipients', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: Sequelize.STRING,
			street: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			number: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			complement: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			state: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			city: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			zipCode: Sequelize.STRING,
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			update_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('recipients');
	},
};
