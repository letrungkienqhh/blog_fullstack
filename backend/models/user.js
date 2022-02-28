const mongoose=require('mongoose');
const crypto=require('crypto');

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        trim:true,
        required:true,
        max:32,
        unique:true,
        index:true,
        lowercase:true,
    },
    name:{
        type:String,
        trim:true,
        required:true,
        max:32,
    },
    email:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        unique:true,
    },
    profile:{
        type:String,
        required:true,

    },
    hashed_password:{
        type:String,
        required:true,
    },
    salt:String,
    about:{
        type:String,
    },
    role:{
        type:Number,
        default:0,
    },
    photo:{
        data:Buffer,
        contentType:String
    },
    resetPasswordLink:{
        data:String,
        default:''
    }

},{timestamps:true})
// tu tao ra hashed_password san co tu cac fields khac
userSchema.virtual('password')
    .set(function(password) {
        //create a temporarity variable called_password
        this._password=password;
        //generate salt 
        this.salt=this.makeSalt()
        //encryptPassword
        this.hashed_password=this.encryptPassword(password)
    })
    .get(function(){
        return this.password
    })
    
userSchema.methods={
    authenticate:function(plainText){
        return this.encryptPassword(plainText)==this.hashed_password
    },
    encryptPassword:function(password){
       if (!password) return ''
       try{
           return crypto
                    .createHmac('sha1',this.salt)//dung thuat toan sha1 voi secret salt
                    .update(password)// change the password by sha1
                    .digest('hex')
       }
       catch (err) {
           return ''

       }
    },

    makeSalt:function(){
        return Math.round(new Date().valueOf()* Math.random()) +''
    }
}
module.exports=mongoose.model('User',userSchema)