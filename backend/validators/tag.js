const {check} =require('express-validator')
exports.tagValidator = [
    check('name')
        .notEmpty()
        .withMessage('name tag is required')
]