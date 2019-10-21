
const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const SaleSchema = new mongoose.Schema({ 
 sale: Number,
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const SaleModel = mongoose.model('Sale', SaleSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// function getHelloWorldString() {
//   return 'hello world'
// }

//get all users
function getAllSales(){
    return SaleModel.find();
}


//get single user
function getOneSale(sale_id){
    return SaleModel
        .findById(sale_id)
}

//create user
function addOneSale(name){
    return SaleModel
        .create(name)
}

function updateSaleId(saleId, saleData){
    return SaleModel.findOneAndUpdate({_id: saleId}, saleData);
}

function deleteSaleById(sale_id){
    return SaleModel
        .findByIdAndDelete({sale_id});
}





// function createUser(){
//     return UserModel.create({
//         name: "Mickey",
//         age: 33,
//         gender: "Female"
//     })
// }
//  createUser();

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
//   getHelloWorldString,
  getAllSales,
  getOneSale,
  deleteSaleById,
  updateSaleId,
//   createUser,
  addOneSale,
}
