const express = require('express')
const mongoose = require('mongoose')
const Products = require('./models/product.model.js')

mongoose.connect("mongodb+srv://admin:OGguYe4Q36Xjfkj5@backend.exwhbsh.mongodb.net/?retryWrites=true&w=majority&appName=backend")
.then(() => {
    console.log('DataBase Connected..!');
}).catch(() => {
    console.log('Connection failed..!');
})

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("index page welcomes you..!")
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Products.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/api/allproducts', async (_, res) => {
    try {
        const product = await Products.find();
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/api/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Products.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/api/removeProd/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Products.findByIdAndDelete(id, req.body);

        if (!product) {
            res.status(404).json({message: `No User with id ${id}...!`});
        }

        res.status(200).json("Prduct with ID " + product["_id"] + " delected Sucessfully..!")

    } catch (error) {
        
    }
})

app.post('/api/updateProd/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Products.findByIdAndUpdate(id, req.body);

        if(!product) {
            res.status(404).json({message: "No User Found..!"})
        }

        res.status(200).json("Product with ID " + product['_id'] + " updated Successfully..!")

    } catch (error) {
        
    }
})

app.listen(3000, () => {
    console.log("Server Started :)");
})