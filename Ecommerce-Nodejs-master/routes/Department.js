const express = require('express');
const router = express.Router();

const departmentsController = require('../controllers/Department');


//GET /departments
router.get('/', departmentsController.getAll)

module.exports = router;
