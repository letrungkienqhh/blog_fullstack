const express=require('express')
const router=express.Router()
const {tagValidator} =require('../validators/tag')
const {create,read,list,remove}=require('../controllers/tag')
const {runValidator}=require('../validators')

const { requireSignin, adminMiddleware } = require('../controllers/auth');

router.post('/tag', tagValidator, runValidator, requireSignin ,adminMiddleware ,create)
router.get('/tags',list)
router.get('/tag/:slug',read)
router.delete('/tag/:slug',requireSignin,adminMiddleware,remove)

module.exports=router   