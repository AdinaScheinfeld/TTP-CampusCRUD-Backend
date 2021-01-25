const Sequelize = require('sequelize');
const db = require('../dbinit');

// Student model
const Student = db.sequelize.define('student', {
    studentname: {
        type: Sequelize.STRING,
        allowNull: false
    },

    gpa: {
        type: Sequelize.FLOAT(),
        validate: {
            len: [0, 4]
        }
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },

    imageurl: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Student;