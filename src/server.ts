import express from 'express'
import { router } from './routes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use('/clientes', router)
app.listen(4000, () => console.log('Example app listening on port 4000!'))