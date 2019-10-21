// IMPORT EXPRESS
const express = require('express')

// IMPORT API FROM MODELS
const userApi = require('../models/user.js')

// CREATE NEW ROUTER TO CONTAIN ALL REQ HANDLERS
const userRouter = express.Router({
  // need to merge parameters for router to give access to parent
  mergeParams: true
})

// REQ HANDLERS ****************

// GET ALL USERS
userRouter.get("/activities/:activitiesId/users", function (req, res) {
  userApi.getAllUsers()
    .then((allUsers) => {
      // RENDER NOT CREATED YET
      // res.render("activitiesViewPath", {allActivities})
      res.json({ allUsers })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// CREATE NEW USERS
userRouter.post("/activities/:activitiesId/users", function (req, res) {
  const newUser = req.body
  newUser.activity_id = req.params.activitiesId
  userApi.addUser(newUser)
    .then((users) => {
      // res.redirect("/users")
      res.json(users)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// CREATE USERS PATH
userRouter.get("/activities/:activitiesId/users/new", function (req, res) {
  userApi.addUser(req.params.activitiesId)
    .then((getUsers) => {
      // res.send({ getUsers })
      res.json({ getUsers })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// RENDER CREATEFORM
userRouter.get("/activities/:activitiesId/users/add", function (req, res) {
  // RENDER NOT CREATED YET
  // res.render("usersViewPath", {
  // })
  res.json("ok")
})

// GET ONE USER BY userId
userRouter.get("/activities/:activitiesId/users/:usersId", function (req, res) {
  userApi.getOneUser(req.params.usersId)
    .then((usersFromDb) => {
      // RENDER NOT CREATED YET
      // res.render("usersViewPath", {_id: req.params.usersId, usersFromDb})
      res.json(usersFromDb)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// EDIT USER
userRouter.put("/activities/:activitiesId/users/:usersId", function (req, res) {
  userApi.updateUser(req.params.usersId, req.body)
    .then((users) => {
      // res.redirect("/users")
      res.json(users)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// DELETE USER
userRouter.delete("/activities/:activitiesId/users/:usersId", function (req, res) {
  userApi.deleteUser(req.params.usersId)
    .then((users) => {
      // res.redirect("/users") //redirects to "/", can use any url, etc.
      res.json(users)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

//  IMPORT ROUTERS
module.exports = {
  userRouter
}