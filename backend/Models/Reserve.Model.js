const mongoose=require("mongoose");

const reserveSchema=mongoose.Schema({
    matrix:Array
})

const ReserveModel=mongoose.model("reserve",reserveSchema);

module.exports={
    ReserveModel
}