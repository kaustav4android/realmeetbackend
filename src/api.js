const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get('/add', (req, res) => {
 // console.log('testdata');
  res.json({
    
      "firstName": "Joe Ander",
      "lastName": "Smith"
    
  });
});

module.exports=app;
app.use(`/.netlify/functions/api`, router);
module.exports.handler = serverless(app);
