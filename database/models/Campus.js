const Sequelize = require('sequelize');
const db = require('../dbinit');

// Campus model
const Campus = db.sequelize.define('campus', {
    campusname: {
        type: Sequelize.STRING,
        allowNull: false
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    address: {
        type: Sequelize.STRING,
        allowNull: false
    },

    imageurl: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Campus;