const { Router } = require("express");
const ProductsModel = require("../models/product.model.js");

const router = Router();


router.get('/', (req, res) => {
    const products = ProductsModel.getAll()
    res.json(products)
});

router.post('/', (req, res) => {
    const data_product = req.body
    const new_product = ProductsModel.create(data_product)

    res.json(new_product)
});

module.exports = router;