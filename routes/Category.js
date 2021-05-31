const express = require('express');
const router = express.Router();

const categoriesController = require('../controllers/Category');


//GET /categories
router.get('/', categoriesController.getAll)

module.exports = router;
