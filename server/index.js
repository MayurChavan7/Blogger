import express from "express";
import Router from './routes/route.js'
import Connection from "./database/db.js";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from 'cors';
const app =express();
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router)
dotenv.config();
const PORT =4000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)) 
const username=process.env.DB_username;
const password=process.env.DB_password;
Connection(username,password);
