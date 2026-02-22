import mongoose from "mongoose"

const recordSchema = mongoose.Schema({
    date: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    amount: { type: Number, required: true }
}, { timestamps: true })

export default mongoose.model("Record", recordSchema)