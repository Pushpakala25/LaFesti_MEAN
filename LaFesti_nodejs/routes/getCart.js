let express = require('express')
let router = express.Router()

var path = require("path")

const { MongoClient, ObjectId } = require('mongodb');

const url = "mongodb://127.0.0.1:27017"
const dbName = 'LaFesti'


router.get("/testingall",(req,res)=>{  
      MongoClient.connect(url,function(err,conn){     
           var db=conn.db(dbName)    
             db.collection('discount').find().toArray((err,data) => {   
                      res.send(data)       
             }) 
               })})

// router.post("/food",function(req,res){
//      console.log(req.body)
//      MongoClient.connect(url,function(err,conn){
//           var db=conn.db(dbName);
//           db.collection("food").insertMany(req.body,function(err,data){
//                console.log(data)
//                res.send(data)
//                })
//                })
//                })


module.exports=router;