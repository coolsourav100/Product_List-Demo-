const Product = require('../model/product')
exports.getProduct=((req,res,next)=>{
    Product.findAll().then(result=>{
        res.send(result)
    }).catch(err=>console.log(err))
})

exports.postProduct=((req,res,next)=>{
let price = req.body.price
let product = req.body.product
Product.create({
    price:price,
    product : product
}).then((result)=>{
    res.send('Product List Successfully')
}).catch(err=>console.log(err))
})
exports.deleteProduct=((req,res,next)=>{
    let id = req.params.id
    Product.findByPk(id).then(result=>{
        result.destroy();
    }).then(result=>{
        res.send('Product has been deleted')
    }).catch(err=>console.log(err))
})