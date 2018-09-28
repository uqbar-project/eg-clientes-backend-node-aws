import express from 'express'
import {customerRoutes} from './customer/routes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use('/customers', customerRoutes)
app.use(function (err: any, req: any, res: any, next: any) {
    console.error(err.stack)
    res
        .status(500)
        .send('Something broke!')
})
app.listen(4000, () => console.log('Example app listening on port 4000!'))