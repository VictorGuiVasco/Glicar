import express from 'express'
import routes from './routes.js'

const app = express();

app.use(routes)
app.use(express.json())

app.listen(3333);