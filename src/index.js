import express from 'express'
import { startDatabase } from './database'
import userRouter from './routes/users.router'

const app = express()

app.use(express.json())
app.use('/users', userRouter)

app.listen(3000, () => {
    console.log('App running on port 3000')
    startDatabase()
})