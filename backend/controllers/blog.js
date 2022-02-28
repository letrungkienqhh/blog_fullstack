const formidable = require("formidable")
const  slugify = require("slugify")

import  stripHtml  from "string-strip-html"
const _ = require("lodash")

const user = require("../models/user")
const category = require("../models/category")
const tag = require("../models/tag")
const Blog = require("../models/blog")

const fs=require("fs")

exports.create=(req,res)=>{
    let form= new formidable.IncomingForm()
    form.keepExtensions=true
    form.parse(req,(error,fields,files)=>{
        if (error) 
            return res.status(400).json({error:"Image could not upload"})
    })
    const {title,body,categories,tags}=fields
    let blog=new Blog()
    blog.title=title
    blog.body=body
    blog.slug=slugify(title).toLowerCase()
    blog.mtitle=`${title}| ${process.env.APP_NAME}`
    blog.mdesc=stripHtml(body.subString(0,150))
    blog.postedBy=req.user._id
    
    if (files.photo){
        if (files.photo.size>1000000){
            return res.status(400).json({error:'Images should be less than 1mb size'})
        }
        blog.photo.data=fs.readFileSync(files.photo.path)
        blog.photo.contentType=files.photo.type
    }
    blog.save((error,result)=>{
        if (error) {
            return res.status(400).json({error:'Error detected while saving images'})
        }
        res.json(result)
    })
    res.json({message:'da dang nhap bao create blog'})
        
}