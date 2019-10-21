
const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const productSchema = new mongoose.Schema({ 
 product: String,
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const productModel = mongoose.model('product', productSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// function getHelloWorldString() {
//   return 'hello world'
// }

//get all users
function getAllProducts(){
    return productModel.find();
}


//get single user
function getOneproduct(product_id){
    return productModel
        .findById(product_id)
}

//create user
function addOneproduct(name){
    return productModel
        .create(name)
}

function updateproductId(productId, productData){
    return productModel.findOneAndUpdate({_id: productId}, productData);
}

function deleteproductById(product_id){
    return productModel
        .findByIdAndDelete({product_id});
}





function createproduct(){
    return productModel.create({

        product: "Rice",

    })
}
 createproduct();

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
//   getHelloWorldString,
  getAllProducts,
  getOneproduct,
  deleteproductById,
  updateproductId,
  createproduct,
  addOneproduct,
}
