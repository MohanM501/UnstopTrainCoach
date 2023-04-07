const express=require('express');
const cors=require("cors");
const { connection } = require('./Configue/db');
require("dotenv").config()

const app=express();
const port=process.env.PORT || 8080 ;

// Inbuilt middleware from express to parse incoming JSON data for POST request.
app.use(express.json());

// cors allows access to restricted resources outside the domain.
app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send({"msg":"Hi !, Warm welcome to book Train seats"})
})

app.listen(port, async()=>{
    try {
        await connection
        console.log("Connected to DB successfully")
    } catch (error) {
        console.log(error,"err");
        console.log("Failed to Connect to DB")
    }
    console.log(`listening on PORT ${port}`)
})