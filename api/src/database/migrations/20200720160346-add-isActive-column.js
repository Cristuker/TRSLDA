'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('orders', 'status', {
            type: Sequelize.INTEGER,
            allowNull: true,
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('orders', 'status');
    },
};
