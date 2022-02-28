const User=require('../models/user')
const shortId=require('shortId')
const jwt=require('jsonwebtoken')
const  expressJwt=require('express-jwt')

exports.signup=(req,res)=>{
    const {name,email,password} =req.body
    User.findOne({email:email}).exec((err,user)=>{
        if (user){
            return res.status(400).json({
                error:'Email invalid'
            })
        }
        let userName=shortId.generate()
        let profile=`${process.env.CLIENT_URL}/profile/#${userName}`
        let newUser=new User({name,email,password,profile,userName})
        newUser.save((err,sucess)=>{
            if (err){
                return res.status(400).json({
                    error:err
                })  
            }
            res.json({user:sucess,message:'Sign up successfully. Please sign in'})
       
        })
    })
}


exports.signin=(req,res)=>{
    const {email,password} = req.body
   
    User.findOne({email:email}).exec((err,user)=>{
        //error happen
        if (err || !user){
            return res.status(400).json({
                error:'User with that email is not exist. Please signup'
            })
        } 
        // authenticate (check password)
        if (!user.authenticate(password)){
            return res.status(404).json({
                error:'Email or password does not match. Please sign in again!'})
        }

        //generate JWT token

        const token=jwt.sign({_id:user.id},process.env.JWT_SECRET,{expiresIn:'1d'})
        res.cookie('token',token,{expiresIn:'1d'})
        const {_id,userName,name,email,role}=user
        return res.json({
            token,
            user:{_id,userName,name,email,role}
        })
    })
}

exports.signout=(req,res)=>{
    res.clearCookie("token")
    res.json({
        message:"SignOut succesfully"
    })

}

exports.requireSignin=expressJwt({
    secret:process.env.JWT_SECRET,
    algorithms: ['HS256']
})

exports.authMiddleware=(req,res,next)=>{
    const authUserId=req.user._id
    
    User.findById({_id:authUserId}).exec((error,user)=>{
        if (error || !user){
            res.status(400).json({
                error:"User not found"
            }) 
        }
        req.profile=user
        next()
    })
}

exports.adminMiddleware=(req,res,next)=>{
    const adminUserId=req.user._id
    
    
    User.findById({_id:adminUserId}).exec((error,user)=>{
        if (error || !user){
            returnres.status(400).json({
                error:"User not found"
            }) 
        }
        if(user.role!==1){
            return res.status(404).json({
                error:"Admin resource. Access denied!!"
            })
        }
        req.profile=user
        
        next()
    })
}

