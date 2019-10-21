/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const templateApi = require('../models/template.js')
const userApi = require('../models/users.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const templateRouter = express.Router()
const userRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */
// templateRouter.get('/', (req, res) => {
//   res.json(templateApi.getHelloWorldString())
// })
userRouter.get('/getUser', (req, res) => {
  res.json(userApi.getAllUsers())
})

// userRouter.get('/createUser', (req, res) => {
//   res.json(userApi.createUser())
// })

userRouter.post('/', async (req, res) => {
  const userData = req.body;
  try {
    const userCreated = await userApi.createUser(userData);
    res.status(201).json(userCreated);
    return;
  } catch (e) {
    const message = `failed to create shop using data from request body
    ${JSON.stringify(shopData, null, 4)}
    , please check request body and try again`;
    console.log(message);
    console.log(e);
    res.status(500).json({
      error: e,
      message,
    });
    return;
  }
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  templateRouter,
  userRouter
}
