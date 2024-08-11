import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import { connectDB, userModel } from "./models/UserDetails.js"

connectDB()

const app = express();
app.use(cors())
app.use(express.json())

const port = 8000;

// for creating user in the DB okay through using frontend
app.post("/create", async (req, res) => {
    const { name, desc, age } = req.body;
    await userModel.create({ name, desc, age })
        .then(user => { res.json(user) })
        .catch(err => { res.json(err) })

})


// for printing the user in front end
app.get("/getUsers", async (req, res) => {
    await userModel.find()
        .then((user) => { res.json(user) })
        .catch((err) => { res.json(err) })

})


// for finding particular user only
app.get("/oneuser/:id", async (req, res) => {
    const id = req.params.id;

    await userModel.findById({ _id: id })
        .then((user) => { res.json(user) })
        .catch((err) => { res.json(err) })
})

// for updating existing value in DB
app.put("/update/:id", (req, res) => {

    const id = req.params.id;
    userModel.findByIdAndUpdate({ _id: id }, { name: req.body.name, email: req.body.email, age: req.body.age })
        .then((user) => { res.json(user) })
        .catch((err) => { res.json(err) })
})

// deleting from the database

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    userModel.findOneAndDelete({ _id: id })
        .then((result) => { res.json(result) })
        .catch((err) => { res.json(err) })
})

app.listen(port, () => {
    console.log(`The port is running at ${port}`)
})

