import express from 'express'
import CustomerService from './services'
import { OK } from '../services/httpResponse'
import errorHandler from '../services/errorHandler';

export const customerRoutes = express.Router()

const customerService = new CustomerService()

customerRoutes.get('/', async(req, res) => {
  customerService.findAll((customers : any) => {
    res
      .status(OK)
      .json(customers)
  }, 
    errorHandler.bind(null, res)
  )
})
