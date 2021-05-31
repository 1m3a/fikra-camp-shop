const express = require('express');

const router = express.Router();

const { body } = require('express-validator');

const blogController = require('../controllers/Blog');


//GET /products
router.get('/', blogController.getAll);

//GET /products/:id
router.get('/:id', blogController.getById);

//DELETE /products/:id
router.delete('/:id', blogController.deleteById);


//GET /products/:id
router.put('/:id',
    [
        body("title").trim()
            .isLength({ min: 2, max: 30 }),
        body("description").trim()
            .isLength({ min: 2 }),
    ],
    blogController.createPost);


module.exports = router;
