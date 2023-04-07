const express=require('express');
const cors=require("cors");
const { connection } = require('./Configue/db');
const { getSeatsRouter } = require('./Routes/getseats.route');
const { updateSeatsRouter } = require('./Routes/updateSeats.route');
require("dotenv").config()

const app=express();
const port=process.env.PORT || 8080 ;

// Inbuilt middleware from express to parse incoming JSON data.
app.use(express.json());

// cors allows access to restricted resources outside the domain.
app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send({"message":"Hi !, Warm welcome to book Train seats"})
})

// All Routes

app.use("/seats",getSeatsRouter);
app.use("/update",updateSeatsRouter);


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