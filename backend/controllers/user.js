exports.read=(req,res)=>{
    req.profile.hashedPassword=undefined
    return res.json(req.profile)

}