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
// const templateApi = require('../models/template.js')
const saleApi = require('../models/sales.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const templateRouter = express.Router()
const saleRouter = express.Router()

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

saleRouter.get("/sales", async (req, res) =>{
  // saleApi.getAllsales()
  //   .then((allsales) => {
  //     res.json({ allsales })
  //   })
  //   .catch((error) => {
  //     console.log(error) //will show error in console
  //   })
  try {
    const retrievedsales = await saleApi.getAllsales();
    console.log(retrievedsales);
    res.status(200).json(retrievedsales);
    return;
} catch(e) {
    const message = `Failed to retrieve all sales.
        Please check mongod service and make sure it is running`;
    console.log(message)
    console.error(e);
     res.status(500).json({
         error: e,
         message,
     });
     return;
}
})

// saleRouter.get('/createsale', (req, res) => {
//   res.json(saleApi.createsale())
// })

saleRouter.post('/createSale', async (req, res) => {
  const saleData = req.body;
  try {
    const saleCreated = await saleApi.createSale(saleData);
    res.status(201).json(saleCreated);
    return;
  } catch (e) {
    const message = `failed to create shop using data from request body
    ${JSON.stringify(saleData, null, 4)}
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
  // templateRouter,
  saleRouter
}
