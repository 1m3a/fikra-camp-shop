const Product = require('../models/Product');

module.exports.getAll = (req, res, next) => {
    Product.find()
        .then(products => {
            if (!products || !products.length) {
                return res.status(404).json({ message: "Products not found" })
            }
            res.json({ products: products });
        })
        .catch(err => next(err));
}

module.exports.getById = (req, res, next) => {
    let productId = req.params.id;
    Product.findById({ productId })
        .then(product => {
            if (!product) {
                return res.status(404).json({ message: "Product not found" })
            }
            res.json({ product: product });
        })
        .catch(err => next(err));
    // Product.getProductByID(productId, function (e, item) {
    //     if (e) {
    //         e.status = 404; return next(e);
    //     }
    //     else {
    //         res.json({ product: item })
    //     }
    // });
}

module.exports.deleteById = (req, res, next) => {
    let productId = req.params.id;
    Product.findById({ productId })
        .then(product => {
            if (!product) {
                return res.status(404).json({ message: "Product not found" })
            }
            product.delete()
            res.json({ product: product });
        })
        .catch(err => next(err));
}