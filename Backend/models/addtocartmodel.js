const mongoose=require('mongoose');
const express=require('express');

const addtocartSchema=new  mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true

    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
        
    },
    name:{
        type:String,
        required:true
    },

    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    totalprice:{
        type:Number,
        required:true
    },


})
 const Addtocart=mongoose.model('Addtocart',addtocartSchema);
 module.exports=Addtocart