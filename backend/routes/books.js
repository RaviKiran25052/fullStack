const router = require("express").Router()
const Books = require('../models/book.model')

router.post('/', (_, res) => {
    res.send("books page welcomes you..!")
})

router.post('/add', async (req, res) => {
    try {
        await Books.create(req.body)
        res.status(200).json({message: "Successfully created..!"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/displayall', async (_, res) => {
    try {
        const product = await Books.find();
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/display/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Books.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/delete/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Books.findByIdAndDelete(id, req.body);

        if (!product) {
            res.status(404).json({message: `No User with id ${id}...!`});
        }

        res.status(200).json("Prduct with ID " + product["_id"] + " delected Sucessfully..!")

    } catch (error) {
        
    }
})

router.post('/update/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Books.findByIdAndUpdate(id, req.body);

        if(!product) {
            res.status(404).json({message: "No User Found..!"})
        }

        res.status(200).json("Product with ID " + product['_id'] + " updated Successfully..!")

    } catch (error) {
        
    }
})

module.exports = router