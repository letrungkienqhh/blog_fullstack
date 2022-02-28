const express=require('express');
const { requireSignin, adminMiddleware } = require('../controllers/auth');
const router=express.Router()
const {create}=require('../controllers/blog')

router.post('/blog',requireSignin,adminMiddleware ,create)

module.exports=router