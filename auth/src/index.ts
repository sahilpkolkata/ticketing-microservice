import mongoose from 'mongoose'
import { app } from './app'
const start = async()=>{
    if(!process.env.JWT_KEY){
        throw new Error('JWT key must be defined')
    }
    try{
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
       })
       console.log('Connected to MongoDB')
    }catch(err){
        console.error(err)
    }

    app.listen(3000,()=>{
        console.log('Listening to 3000!!!')
    })
}

start()


