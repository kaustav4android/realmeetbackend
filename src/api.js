const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();
// const mongoose=require('mongoose');

// const { MongoClient }= require("mongodb");
// require('dotenv').config();

// mongoose.connect("mongodb+srv://kaustavchaudhury:zCRS6Ole1I27Xwhv@meeting.52ohm.mongodb.net/?retryWrites=true&w=majority&appName=meeting").then(()=>console.log('Connected successfully')).catch((error)=>console.log(error));
// var cors = require('cors')
// app.use(express.json());
// app.use(cors())

// const userschema=new mongoose.Schema({

//   username:String,
//   email:String,
//   password: String
// })
// const emp = new mongoose.model("userregistration", userschema);


// // const userModel=new mongoose.model("users",userschema);
//   console.log('test');
//   const mongoclient=new MongoClient(process.env.MONGODB_URI);

//   const clientpromise =mongoclient.connect();
//   const handler = async(event)=>{

//     try{
   
      
//       const database =(await clientpromise).db(process.env.MONGODB_URI);
//       const collection=database.collection(process.env.MONGODB_COLLECTION);
//       const result=await collection.find({}).toArray();
//           console.log("Pinged your deployment. You successfully connected to MongoDB!");
//       return{
//         statusCode:200,
//         body:JSON.stringify(result),
  
//       }
//     }catch(error)
//     {
//   return{
  
//     statusCode:500,
//     body:JSON.error.toString(),
//   }
//     }
//   }

  router.post("/register", async (req, res) => {

    // doc = {
    //     "name":"harsha newly added",
    //     "contact_number":"9833910512",
    //     "address":"mumbai",
    //     "salary":20000,
    //     "employee_id":98829,
    //     "role":"operations"
    // }

    doc = req.body;

    let u = await emp(doc);
	let result = u.save();
	res.send(doc);

})
router.get('/testdata', (req, res) => {
  res.json({
    
    "firstName": "Avishek iyer",
    "lastName": "Smith",
    "college":"St xavier college student"

  
});
});

router.get('/add', (req, res) => {
 // console.log('testdata');
  res.json({
    
      "firstName": "Joe Anderson gghjdgjhgdhjg",
      "lastName": "Taylor Smith ",
      "college":"St college student"

    
  });
});

app.use(`/.netlify/functions/api`, router);
module.exports.handler = serverless(app);
