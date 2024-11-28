import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const URL = process.env.MONGODB_URL;

// This middleware help to decode token in SecureRoute.jsx
app.use(cookieParser())

// middleware for cors setting verify
app.use(cors());

// middleware parse json data
app.use(express.json());


try{
    mongoose.connect(URL);
    console.log('MongoDB Connected');
    
}catch(err){
    console.log('MongoDB not Connect'+ err);
}

// middleware for route
app.use('/user', userRoute);

// app.get('/', (req, res) => {
//     res.send('hello')
// });


app.listen(PORT, (err) => {
    if(err) throw new Error("PORT not listen!!");
    return console.log(`PORT listen on ${PORT}`);
})