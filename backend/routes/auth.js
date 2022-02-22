const express=require('express');
const router=express.Router()
const {signup,signin,signout,requireSignin}=require('../controllers/auth')


const {runValidator}=require('../validators')
const {userSignupValidator}=require('../validators/auth')
const {userSignInValidator}=require('../validators/auth')


router.post('/signup',userSignupValidator ,runValidator,signup)
router.post('/signin',userSignInValidator ,runValidator,signin)
router.get('/signout',signout)

router.get('/secret',requireSignin,(req,res) => {
    return res.json({
        message:'You have to access this secret api!'
    })
})
module.exports=router