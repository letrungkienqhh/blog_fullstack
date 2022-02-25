const {check}=require('express-validator')

exports.userSignupValidator =[
    check('name')
        .notEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({min:6})
        .withMessage('Password must be at least 6 characters long')

]

exports.userSignInValidator=[
    
    check('email')
        .isEmail().
        withMessage('Email invalid'),
    check('password')
        .isLength({min:6}).
        withMessage('Password must be at least 6 characters long')
]