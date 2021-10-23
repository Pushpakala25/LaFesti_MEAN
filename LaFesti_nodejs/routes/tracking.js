let express = require('express')
let router = express.Router()

var path = require("path")

const { MongoClient, ObjectId } = require('mongodb');

const url = "mongodb://127.0.0.1:27017"
const dbName = 'LaFesti'

router.get("/viewFeedback",function(req,res){
    MongoClient.connect(url,function(err,conn){
        var db = conn.db(dbName)
        db.collection("feedBack").find()
        .toArray(function(err,data){
            res.send(data)
        })
    
    })
})



router.post('/addFeedback',(req,res)=>{
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db(dbName);
        db.collection('feedBack').insertOne(req.body,(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                res.send(data)
            }
        })
    })
})



module.exports=router;