const { validationResult } = require('express-validator');

const Blog = require('../models/Blog');

module.exports.getAll = (req, res, next) => {
    Blog.find()
        .then(posts => {
            if (!posts || !posts.length) {
                return res.status(404).json({ message: "posts not found" })
            }
            res.json({ posts: posts });
        })
        .catch(err => next(err));
}

module.exports.getById = (req, res, next) => {
    let postId = req.params.id;
    Blog.findById({ postId })
        .then(post => {
            if (!post) {
                return res.status(404).json({ message: "post not found" })
            }
            res.json({ post: post });
        })
        .catch(err => next(err));
}

module.exports.deleteById = (req, res, next) => {
    let postId = req.params.id;
    Blog.findById({ postId })
        .then(post => {
            if (!post) {
                return res.status(404).json({ message: "post not found" })
            }
            post.delete();
            res.json({ post: post });
        })
        .catch(err => next(err));
}

module.exports.createPost = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        let inputDataErrors = '';
        errors.array().forEach((item, index) => {
            inputDataErrors = inputDataErrors.concat(`error ${index + 1}: ${item.msg} - in: ${item.param}${index + 1 < errors.array().length ? ', ' : ''}`);
        });
        const error = new Error('Validation failed, entered data is incorrect. { ' + inputDataErrors + ' }');
        error.statusCode = 422;
        return next(error);
    }

    const body = req.body;
    body.imagePath = req.files.imagePath;

    Blog.create({ ...body })
        .then(post => {
            res.json({ post: post });
        })
        .catch(err => next(err));
}