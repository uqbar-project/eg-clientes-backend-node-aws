import express from 'express'
import CustomerService from './services/customers'

export const router = express.Router()

const customerService = new CustomerService()
const OK = 200

router.get('/', async(req, res) => {
  customerService.findAll((customers: any) => {
    res.status(OK).json(customers)
  })
})
