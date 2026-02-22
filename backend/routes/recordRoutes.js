import express from 'express'
import Record from '../models/Record.js'
import mongoose from 'mongoose'
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const { date, category, name, type, amount } = req.body

        const newRecord = new Record({
            date: date,
            category: category,
            name: name,
            type: type,
            amount: amount,
        })
        const savedRecord = await newRecord.save();

        res.status(201).json({ savedRecord })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get("/", async (req, res) => {
    try {
        const records = await Record.find()
        res.status(200).json({ records })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const record = await Record.findById(id)
        res.status(200).json({ record })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const record = await Record.findByIdAndDelete(id)

        res.status(200).json({ message: "Record deleted successfully!" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const newData = req.body
        const updatedRecord = await Record.findByIdAndUpdate(
            id,
            newData,
            { new: true }
        )
        res.status(200).json(updatedRecord)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
export default router