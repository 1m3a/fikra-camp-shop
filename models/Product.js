var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  imagePath: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    trim: true,
  },
  size: {
    type: String,
    trim: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

var Product = module.exports = mongoose.model('Product', productSchema);

module.exports.getAllProducts = function (query, sort, callback) {
  Product.find(query, null, sort, callback)
}

module.exports.getProductByDepartment = function (query, sort, callback) {
  Product.find(query, null, sort, callback)
}

module.exports.getProductByCategory = function (query, sort, callback) {
  Product.find(query, null, sort, callback)
}

module.exports.getProductByTitle = function (query, sort, callback) {
  Product.find(query, null, sort, callback)
}

module.exports.filterProductByDepartment = function (department, callback) {
  let regexp = new RegExp(`${department}`, 'i')
  var query = { department: { $regex: regexp } };
  Product.find(query, callback)
}

module.exports.filterProductByCategory = function (category, callback) {
  let regexp = new RegExp(`${category}`, 'i')
  var query = { category: { $regex: regexp } };
  Product.find(query, callback);
}

module.exports.filterProductByTitle = function (title, callback) {
  let regexp = new RegExp(`${title}`, 'i')
  var query = { title: { $regex: regexp } };
  Product.find(query, callback);
}

module.exports.getProductByID = function (id, callback) {
  Product.findById(id, callback);
}

