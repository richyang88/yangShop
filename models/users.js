
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
function getOneUser(user_id){
    return UserModel
        .findById(user_id)
}

//create user
function addOneUser(name){
    return UserModel
        .create(name)
}

function updateUseryId(userId, userData){
    return UserModel.findOneAndUpdate({_id: userId}, userData);
}

function deleteUserById(user_id){
    return UserModel
        .findByIdAndDelete({user_id});
}





// function createUser(){
//     return UserModel.create({
//         name: "Alex",
//         age: 33,
//         gender: "Male"
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
  getAllUsers,
  getOneUser,
  deleteUserById,
  updateUseryId,
//   createUser,
  addOneUser,
}
