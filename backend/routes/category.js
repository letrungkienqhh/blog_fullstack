const express=require('express')
const router=express.Router()
const {categoryValidator} =require('../validators/category')
const {create}=require('../controllers/category')
const {runValidator}=require('../validators')
const { runInContext } = require('lodash')

router.post('/category',categoryValidator,runValidator, requireSignin,adminMiddleware,create)



module.exports=router   