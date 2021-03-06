const Category =require('../models/category')
const slugify= require('slugify')


exports.create=(req,res)=>{
    const {name}=req.body
    console.log('dang o create')
    let slug=slugify(name).toLowerCase()
    let category=new Category({name,slug})
    
    category.save((error,data)=>{
        if (error){
            return res.status(400).json({
                error:error
            })
        
        }
        console.log(category)
        return res.json(data)
    })
}


exports.list=(req, res) => {
    Category.find({}).exec((error,data)=>{
        if (error) {
            return res.status(404).json({error:error})
        }
        res.json(data)
    })
    
}

exports.read=(req,res) => {
    let slug=req.params.slug.toLowerCase()
    console.log(slug)
    Category.find({slug}).exec((error,data)=>{
        if (error) {
            return res.status(405).json({error: error})
        }
        res.json(data)
    })
}

exports.remove=(req,res) => {
    let slug =req.params.slug.toLowerCase()
    console.log(req.params.slug)
     console.log(req.headers)
    console.log('dang o remover')
    Category.findOneAndRemove({slug}).exec((error,data) => {
        if (error) {
            return res.status(404).json({error:error})
        }
        else {
            res.json({message:"thanh cong delete"})
        }
        
    })
}