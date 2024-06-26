const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  
  title: {
    type: String,
    unique: true,
    required: true,
},
price:{
    type: Number,
    required: true,
},
info: {
    category: String,
    brand: String,
    ratingCount: Number,
    ratingValue: Number,
    stock: Number,
    specificOffers: [
        {
            title: String,
            description: String,
        }
    ],
    amazonServices: [
        {
            title: String,
            description: String,
        }
    ]
},
description: String,
images: [String],
createdAt: {
    type: Date,
    default: new Date(),
},
updatedAt: {
    type: Date,
    default: new Date(),
},
isDeleted: {
    type: Boolean,
    default: false,
}
},);

const productModel = mongoose.model("Products", productSchema);
module.exports = productModel;


//learn custom validators

