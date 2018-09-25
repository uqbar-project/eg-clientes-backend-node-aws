import express from 'express'
import { router } from './routes'

const app = express()

app.use('/clientes', router)

app.listen(3000, () => console.log('Example app listening on port 3000!'))