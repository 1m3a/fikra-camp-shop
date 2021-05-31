const Category = require('../models/Category');

module.exports.getAll = (req, res, next) => {
    Category.find()
        .then(categories => {
            if (!categories || !categories.length) {
                return res.status(404).json({ message: "No categories found" })
            }
            res.status(200).json({ categories: categories });
        })
        .catch(err => next(err));
}