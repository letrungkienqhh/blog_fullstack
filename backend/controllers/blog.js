const formidable = require("formidable")

const { IncomingForm } = require('formidable');
const  slugify = require("slugify")


const _ = require("lodash")
const {stripHtml} = require('string-strip-html');
const user = require("../models/user")
const category = require("../models/category")
const tag = require("../models/tag")
const Blog = require("../models/blog")

const fs=require("fs");
const { smartTrim } = require("../helpers/blog");

exports.create=(req,res)=>{

    let form = new IncomingForm();
    
    form.keepExtensions=true
    form.parse(req,(error,fields,files)=>{
       
        
        if (error) {
            console.log(error)
            return res.status(400).json({error:"Image could not upload"})
        } 
        if (!files.photo){
            return res.status(400).json({error:"Please select a photo"})
        }
        
            
      
        const {title,body,categories,tags}=fields
        console.log(body.length)
        if (!title || !title.length) {
            return res.status(400).json({error:"Title is required"})
        }  
        if (!body || body.length<10) {
            return res.status(400).json({error:"Body is required and not too short"} )
        }  
        if (!tags || !tags.length) {
            return res.status(400).json({error:"Tags is required at least one tag"}) 
        }
        if (!categories || !categories.length) {
            return res.status(400).json({error:"Category is required at least one category"}) 
        }
        let blog=new Blog()
        const categoryOfArray = categories && categories.split(",")
        const tagOfArray = tags && tags.split(",")
        console.log(categoryOfArray)
        blog.title=title
        blog.excerpt=smartTrim(body,320,' ','...')
        blog.body=body
        blog.slug=slugify(title).toLowerCase()
        blog.mtitle=`${title}| ${process.env.APP_NAME}`
        blog.mdesc=stripHtml(body.substring(0,160)).result
        blog.postedBy=req.user._id
        // blog.tags=tags
        // blog.categories=categories
        if (files.photo){
            if (files.photo.size>1000000){
                return res.status(400).json({error:'Images should be less than 1mb size'})
            }
            blog.photo=fs.readFileSync(files.photo.filepath)
            blog.photo.contentType=files.photo.type
        }
        
        blog.save((error,result)=>{
            if (error) {
                console.log(error)
                return res.status(400).json({error:'Error detected while saving images'})
            }
            Blog.findByIdAndUpdate(result._id,{$push:{categories:categoryOfArray}},{new:true}).exec((error,result)=>{
                if (error) {
                    return res.status(400).json({error:error})
                }
                else{
                    Blog.findByIdAndUpdate(result._id,{$push:{tags:tagOfArray}},{new:true}).exec((error,result)=>{
                        if (error) {
                            return res.status(400).json({error:error})
                        }
                        else{
                            res.json(result)
                        }
                    }
                )}
            })
          
           
        })
       
    })
        
}