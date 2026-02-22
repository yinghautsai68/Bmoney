import express from "express"
import Savings from '../models/Savings.js'

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const { goalName, goalAmount } = req.body

        const newSavings = new Savings({
            goalName: goalName,
            goalAmount: goalAmount
        })

        newSavings.save()
        res.status(201).json({ newSavings })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const savings = await Savings.find()

        res.status(200).json({ savings })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router