const mongoose = require('mongoose');
const schema = mongoose.Schema;

const newProduct = new schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    quantity:{
        type:Number,
        require:true,
    }
})


const Product = mongoose.model('Product', newProduct);

module.exports = Product;