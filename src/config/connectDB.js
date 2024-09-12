const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('doctor', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connectDB;