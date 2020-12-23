const mongoose=require('mongoose');
const schema=mongoose.Schema;
const dishesschema=new schema(
    {
        name: {
            type:String,
            required:true,
            unique:true
        },
        description :{
        
            type:String,
        required:true
        }
    },{timestamps :true}
);
var dishes=mongoose.model('dish',dishesschema);
module.exports=dishes;