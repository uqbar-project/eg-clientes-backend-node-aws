import express from 'express'
import CustomerService from './customers/service'
import Customer from './domain/customer'

export const router = express.Router()

const customerService = new CustomerService()
const OK = 200

router.get('/', async(req, res) => {
  customerService.findAll((err: any, customers: Customer[]) => {
    res.status(OK).json(customers)
  })
})
