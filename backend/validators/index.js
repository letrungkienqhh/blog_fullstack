const {validationResult}=require('express-validator')

exports.runValidator=(req,res,next) => {
    console.log(req.body)
    const errors=validationResult(req)
    if (!errors.isEmpty()){
        return res.status(422).json({error:errors.array()[0].msg})
    }
    next()
}