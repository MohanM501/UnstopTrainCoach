const express=require("express");
const { ReserveModel } = require("../Models/Reserve.Model");

const updateSeatsRouter=express.Router();


updateSeatsRouter.patch("/seats",async(req,res)=>{
    const payload=req.body;
  
        let seats=await ReserveModel.find();
        console.log(seats,"seats");
        if(seats.length===0){
            let matrix=[];
            for (let i=0;i<12;i++){
                let arr=[];
                for (let j=0;j<7;j++){
                    if(i===11 && j==3){
                        break;
                    }
                    arr.push(0)
                }
                matrix.push(arr);
            }
            console.log(matrix,"matrix to be pushed");
           return  res.send("hi patch")
        }else{
           return  res.send("bye patch")
        }
  
})

module.exports={
    updateSeatsRouter
}