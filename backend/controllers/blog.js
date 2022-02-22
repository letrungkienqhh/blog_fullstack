exports.time=(req,res)=>{
    console.log('dang o day')
    res.json({time:Date().toString()})
}