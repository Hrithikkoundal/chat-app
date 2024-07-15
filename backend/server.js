// const express = require("express"); we can use import to import the packages but we have to change the type to module
// const dotEnv = require("dotenv");

import path from 'path'
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoute from "./routes/authRoute.js" 
import messageRoute from "./routes/messageRoute.js"
import usersRoute from "./routes/usersRoute.js"

import connectMongoDB from "./DB/connectMongoDB.js";
import { app, server } from "./socket/socket.js"


const PORT = process.env.PORT || 5000

const __dirname = path.resolve();

dotenv.config()  //we cannot directly import env variables, need dotenv to import .env variables

app.use(express.json()) // allow us to get JSON data from third party wesite 
app.use(cookieParser())  // to get the cookies

app.use("/api/auth", authRoute)
app.use("/api/messages", messageRoute)
app.use("/api/users", usersRoute)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req, res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

// app.get("/", (req, res)=>{
//     // root route http://localhost:5000/
//     res.send("Hello world!")
// })

server.listen(PORT, ()=> {
    connectMongoDB()
    console.log(`Server is running on the ${PORT} port`);
})