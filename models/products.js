// IMPORT MONGOOSE
const mongoose = require('./connection.js')
// const UserSchema = require("./user")

// CREATE SCHEMEA
const ActivitySchema = new mongoose.Schema({
  activityName: String,
  activityLevel: String,
  // users_id: mongoose.Types.ObjectId,
  // userInfo: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "UserSchema"
  //   }
  // ]
})

// CREATE COLLECTION API
const activityCollection = mongoose.model('Activity', ActivitySchema)

// FUNCTIONS

// GET/ read
const getAllActivities = () => {
  return activityCollection.find();
}

// GET/ read
const getOneActivity = (activityId) => {
  return activityCollection.findById(activityId)
}

// CREATE/ post
const addActivity = (newActivity) => {
  return activityCollection.create(newActivity)
}

// UPDATE/ edit
const updateActivity = (activityId, updatedActivity) => {
  return activityCollection.updateOne({ _id: activityId }, updatedActivity)
}

// DELETE
const deleteActivity = (activityId) => {
  return activityCollection.findByIdAndDelete(activityId)
}

// EXPORT ALL FUNCTIONS
module.exports = {
  addActivity,
  deleteActivity,
  getAllActivities,
  getOneActivity,
  updateActivity
}
