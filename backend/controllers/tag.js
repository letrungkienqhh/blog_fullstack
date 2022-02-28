const Tag =require('../models/tag')
const slugify= require('slugify')


exports.create=(req,res)=>{
    const {name}=req.body
    console.log('dang o create cua tag')
    let slug=slugify(name).toLowerCase()
    let tag=new Tag({name,slug})
    tag.save((error,data)=>{
        if (error){
            return res.status(400).json({
                error:error
            })
        
        }
        console.log(tag)
        return res.json(data)
    })
}


exports.list=(req, res) => {
    Tag.find({}).exec((error,data)=>{
        if (error) {
            return res.status(404).json({error:error})
        }
        res.json(data)
    })
    
}

exports.read=(req,res) => {
    let slug=req.params.slug.toLowerCase()
    console.log(slug)
    Tag.find({slug}).exec((error,data)=>{
        if (error) {
            return res.status(405).json({error: error})
        }
        res.json(data)
    })
}

exports.remove=(req,res) => {
    let slug=req.params.slug.toLowerCase()
    Tag.findOneAndRemove({slug}).exec((error,data) => {
        if (error) {
            return res.status(404).json({error:error})
        }
        res.json({message:"Remove tag successfully"})
    })
}