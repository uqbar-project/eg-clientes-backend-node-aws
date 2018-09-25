import mysql from 'mysql'
import Customer from '../domain/customer'

export default class CustomerService {

    connection = mysql.createConnection({
        host: 'pinada.cgetf2qp59ke.us-east-2.rds.amazonaws.com',
        user: 'root',
        password: '12345678',
        port: 3306,
        database: 'sys',
        // name: 'pinada',
        debug: false
    })

    constructor() {
        this.connection.connect()
    }

    findAll(callback: any) {
        this.connection.query('SELECT * FROM clientes', function(err, rows, fields) {
            const customers : Customer[] = rows.map((row: any) => new Customer(row.id, row.nombre))
            callback(err, customers)
        })
    }
    
}

/**
 * 
 * router.post('/', async (req, res) => {
    var clientData = {
        id: null,
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