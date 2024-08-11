import mongoose from "mongoose"

const connectDB = () => {
    try {
        const success = mongoose.connect("mongodb://localhost:27017/CrushSection")
        console.log("Database has connected successfully my bro")

    } catch (error) {
        console.log("Database has failed to connect", error)

    }
}


const userSchema = new mongoose.Schema({
    name: String,
    desc: String,
    age: Number

})

const userModel = mongoose.model("users", userSchema)

export { connectDB, userModel }
