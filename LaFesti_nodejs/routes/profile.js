let express = require('express')
let router = express.Router()

var path = require("path")

const { MongoClient, ObjectId } = require('mongodb');

const url = "mongodb://127.0.0.1:27017"
const dbName = 'LaFesti'


router.get("/data/:id",(req,res)=>{
    //console.log("req.body",req.body);

    //req.body.profilepic=req.file.filename
    MongoClient.connect(url,function(err,conn){
        var db = conn.db(dbName);
        db.collection("users").findOne({_id:ObjectId(req.params.id)},(err,data)=>{
            //res.send(data)
            console.log(data)
            res.send(data)
        })
    })
})

router.put("/update/:id",function(req,res){
    MongoClient.connect(url,function(err,conn){
        console.log(req.body)
        var db = conn.db(dbName);
        db.collection("users").updateOne(
            {_id:ObjectId(req.params.id)},{
                $set:{username:req.body.username,password:req.body.password,email:req.body.email,phoneno:req.body.phoneno}
                // $set:req.body
                // $set:req.body
                },
            function(err,data){
                console.log(data)
                res.send(data)
            }
        )
    })
})


module.exports=router;