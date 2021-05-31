const Department = require('../models/Department');

module.exports.getAll = (req, res, next) => {
    Department.find()
        .then(departments => {
            if (!departments || !departments.length) {
                return res.status(404).json({ message: "No departments found" })
            } res.status(200).json({ departments: departments });
        })
        .catch(err => next(err));
}
