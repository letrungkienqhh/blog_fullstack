const {check}=require('express-validator')
exports.categoryValidator=[
    
        check('name')
            .notEmpty()
            .withMessage('name category is required')
            
    
]