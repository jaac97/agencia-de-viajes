import Sequelize from 'sequelize';
const db = new Sequelize('agenciadeviajes', 'root', 'Osoojon97.', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timeStamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});
export default db;