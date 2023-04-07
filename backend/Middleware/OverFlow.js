const { ReserveModel } = require("../Models/Reserve.Model");

const OverFlow=async(req,res,next)=>{
    
    let {booked}=await ReserveModel.find();
    let {no_of_seats}=req.body;
    if(Number(booked)+Number(no_of_seats)>80){
        return res.status(201).send({"msg":`Only ${81-(Number(booked))} seats availabe to book`})
    }else{
        next();
    }

}

module.exports={
    OverFlow
}