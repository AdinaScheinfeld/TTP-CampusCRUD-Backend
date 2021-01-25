const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('campus_students', 'ttp_user', 'mypassword', {
    host: 'localhost',
    dialect: 'postgres'
});

const testDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been establizhed successfully.');
    } catch (error) {
        console.error('Unable to conect to the database', error);
    }
}

testDatabase();

module.exports = { sequelize };