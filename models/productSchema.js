const mongoose = require('mongoose');
const schema = mongoose.Schema;

const newProduct = new schema({
    title:String,
    description:String,
    quantity:Number,
    admin:Boolean,
})

const Product = mongoose.model('Product, newProduct');

module.exports = Product;