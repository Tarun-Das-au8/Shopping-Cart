const express = require("express");
const mongo = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const MongoClient = mongo.MongoClient;
const port = process.env.PORT || 9900;
//const isLocal = process.env.isLocal || true;
const url = "mongodb+srv://tarun:tarun@123@cluster0.gsbhb.mongodb.net/myDB?retryWrites=true&w=majority";

app.use(cors());
let db;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/',(req,res) => {
  res.send('Health Check Working')
});

MongoClient.connect(url,{useUnifiedTopology: true},(err,connection) => {
  if(err) console.log(err);
  db = connection.db('myDB');
  app.listen(port,(err) => {
      if(err) throw err;
      console.log(`Server is running on port ${port}`)
  })
});