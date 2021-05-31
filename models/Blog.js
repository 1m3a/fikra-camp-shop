var mongoose = require('mongoose');

var blogSchema = mongoose.Schema({
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
  category: {
    type: String,
    trim: true,
    default: 'No Category',
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

var Blog = mongoose.model('Blog', blogSchema);


module.exports = Blog;
