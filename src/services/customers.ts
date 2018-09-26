import dbConnection from './dbConnection'
import Sequelize from 'sequelize'

export default class CustomerService {

    Customer = 
        dbConnection.connection.define('clientes', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                field: 'nombre'
            }
        })

    findAll(callback: any) {
        this.Customer.findAll().then( customers => callback(customers) )
    }
    
}

/**
 * 
 * router.post('/', async (req, res) => {
    var clientData = {
        id: null,https://github.com/uqbar-project/eg-clientes-backend-node-aws
        name: req.body.message,
        created_at: null,
        updated_at: null
    };
    connection.query('INSERT INTO clientes SET ?', clientData, function (error, result) {
        if (error) {
            throw error;
        }
        else {
            res.status(200).send();
        }
    });

 */