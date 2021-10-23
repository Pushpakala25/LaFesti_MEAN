let express = require('express')
let router = express.Router()

var path = require("path")

const { MongoClient, ObjectId } = require('mongodb');

const url = "mongodb://127.0.0.1:27017"
const dbName = 'LaFesti'

router.get("/", function (req, res) {
    res.send("Hello!! THERE")
})


router.post("/payment",function(req,res){
    console.log(req.body)
    MongoClient.connect(url,function(err,conn){
        var db=conn.db(dbName);
        db.collection("payment").insertOne(req.body,function(err,data){
            console.log(data)
            res.send(data)
        })
    })
})

module.exports = router;