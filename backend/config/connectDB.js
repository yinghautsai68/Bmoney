import mongoose from "mongoose";
import 'dotenv/config'
const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("db connected")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/bmoney`)
}

export default connectDB