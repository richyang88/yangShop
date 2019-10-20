
const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const UserSchema = new mongoose.Schema({
 name: String,
 age: Number,
 gender: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const UserModel = mongoose.model('User', UserSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// function getHelloWorldString() {
//   return 'hello world'
// }

//get all users
function getAllUsers(){
    return UserModel.find();
}


//get single user
function getUserById(userId){
    return UserModel
        .findById(userId)
}

function deleteUserById(userId){
    return UserModel
        .findOneAndDelete({_id: userId});
}

function updateShopById(userId, userData){
    return UserModel.findOneAndUpdate({_id: userId}, userData);
}

function createShop(){
    return UserModel.create({
        name: "Mickey",
        age: 33,
        gender: "Female"
    })
}


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
//   getHelloWorldString,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateShopById,
  createShop,
}
