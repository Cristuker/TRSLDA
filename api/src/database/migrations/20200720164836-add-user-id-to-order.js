'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('orders', 'user', {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1,
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('orders', 'user');
    },
};
