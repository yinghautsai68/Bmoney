import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/connectDB.js'

import recordRoutes from './routes/recordRoutes.js'
import savingsRoutes from './routes/savingsRoutes.js'
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/records', recordRoutes)
app.use('/api/savings', savingsRoutes)


app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => console.log("server started on port " + port))