import express from 'express'
import CustomerService from './services'
import errorHandler from '../services/errorHandler'
import httpStatus from 'http-status'

export const customerRoutes = express.Router()

const customerService = new CustomerService()

customerRoutes.get('/', async(req, res) => {
  customerService.findAll((customers : any) => {
    res
      .status(httpStatus.OK)
      .json(customers)
  }, 
    errorHandler.bind(null, res)
  )
})
