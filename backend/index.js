import express from 'express';
import mongoose from "mongoose";
import mongodb from "mongodb";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from 'cors';
import { getData,postData,updateOrder,deleteOrder } from './controller/dbController.js';

const PORT = process.env.PORT || 4000
const app = express();
dotenv.config();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

mongoose.connect("mongodb+srv://admin1:bJtCWTgalLQTHPls@cluster0.m9jsjnl.mongodb.net/?retryWrites=true&w=majority"
)
.then(()=>{
    app.listen(PORT,()=> console.log(`Connected to port ${PORT}`))
})
.catch((error)=>{
    console.log(error)
})

app.get('/',(req,res)=>{
    res.send("Hello from express")
})

//get data
app.get('/categories', async (req,res)=>{
    let query = {};
    let collection = "Categories";
    let output = await getData(collection,query);
    res.send(output)
})

//get items
app.get('/items', async (req,res)=>{
    let query = {};
    let collection = "items";
    let output = await getData(collection,query);
    res.send(output)
})

//get data based on categoryId
app.get('/details', async(req,res)=>{
    let query = {};
    if(req.query.category_id){
        query = {category_id:Number(req.query.category_id)}
    }else{
        query= {}
    }
    let collection = "itemType";
    let output = await getData(collection,query);
    res.send(output)
})



