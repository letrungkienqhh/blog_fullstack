const express =require('express')
const morgan =require('morgan')
const bodyParser =require('body-parser')
const mongoose = require('mongoose')
const cookieParser =require('cookie-parser')
const cors =require('cors')
require('dotenv').config()

//routers
const blogRoutes=require('./routes/blog')
const authRoutes=require('./routes/auth')
const userRoutes=require('./routes/user')

const categoryRoutes=require('./routes/category')
const tagRoutes=require('./routes/tag')

//app
const app=express()

//database
mongoose.
    connect(process.env.DATABASE_URL,{useNewUrlParser: true})
    .then(()=>{console.log('MONGODB connected')})
    .catch((e)=>{console.log('MONGODB error=>',e)})

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

//cors
if (process.env.NODE_ENV === 'development'){
    console.log(process.env.CLIENT_URL)
    app.use(cors({origin: `${process.env.CLIENT_URL}`}))

}

//routes
app.use('/',blogRoutes)
app.use('/',authRoutes)
app.use('/',userRoutes)

app.use('/',categoryRoutes)
app.use('/',tagRoutes)

const port =process.env.PORT || 5000

app.listen(port,() => console.log(`Server is running on http://localhost:${port}`)
)


