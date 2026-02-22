import mongoose from "mongoose";

const savingsSchema = new mongoose.Schema({
    goalName: { type: String, required: true },
    goalAmount: { type: Number, requied: true }
}, { timestamps: true })

export default mongoose.model("Savings", savingsSchema)