import Sequelize from 'sequelize'

const sequelize = new Sequelize('sys', 'root', '12345678', {
    host: 'pinada-free.cj4oaiqdteuw.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 10,
        min: 5,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    }
})

export default {
    connection: sequelize
}
