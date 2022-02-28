const express=require('express')
const router=express.Router()
const {categoryValidator} =require('../validators/category')
const {create,read,list,remove}=require('../controllers/category')
const {runValidator}=require('../validators')

const { requireSignin, adminMiddleware } = require('../controllers/auth');



router.post('/category', categoryValidator, runValidator, requireSignin ,adminMiddleware ,create)
router.get('/categories',list)
router.get('/category/:slug',read)


router.delete('/category/:slug', requireSignin,adminMiddleware,remove)
module.exports=router   
//