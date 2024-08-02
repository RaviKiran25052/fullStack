const express = require('express')
const mongoose = require('mongoose')
const bookrouter = require("./routes/books")
const cors = require("cors")
require("dotenv").config()


// database connectivity
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('DataBase Connected..!');
}).catch(() => {
    console.log('Connection failed..!');
})

// middleware
const app = express()
app.use(cors())
app.use(express.json())

// routes
app.post('/', (_, res) => {
    res.send("index page welcomes you..!")
})
app.use('/books', bookrouter)

// server
app.listen(process.env.PORT, () => {
    console.log("Server Started :)");
})