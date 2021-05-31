const express = require('express');
const router = express.Router();

const productsController = require('../controllers/Product');


//GET /products
router.get('/', productsController.getAll);

//GET /products/:id
router.get('/:id', productsController.getById);

//DELETE /products/:id
router.delete('/:id', productsController.deleteById);


module.exports = router;
