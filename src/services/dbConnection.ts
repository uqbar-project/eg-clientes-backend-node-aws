import Sequelize from 'sequelize'

const sequelize = new Sequelize('sys', 'root', '12345678', {
    host: 'pinada.cgetf2qp59ke.us-east-2.rds.amazonaws.com',
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