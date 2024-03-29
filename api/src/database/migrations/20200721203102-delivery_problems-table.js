'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'delivery_problems',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                },
                delivery_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                description: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
                updated_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
            },
            {
                freezeTableName: true,
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('delivery_problems');
    },
};
