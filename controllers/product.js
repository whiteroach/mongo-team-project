const Product = require("../models/productSchema");
const url = require('url')


exports.displayProduct = (req, res) => {
    Product.find((err,data) =>{
        const message = req.query;
        if(err) throw err;
        res.render('product', {product:data, pageName:'Product', msg:{message}})
    
    })
}

exports.createProducts = (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save().then()
        res.redirect(url.format({
            pathname:'/product',
            query:{successMsg:'product added!'}
        })
    )
}