const mongoose=require('mongoose')
const {model,Schema}=mongoose

var Itemm= new Schema({
    name:String
})

module.exports=model("contest",Itemm)