let express = require('express')
let router = express.Router()
const { MongoClient, ObjectId } = require('mongodb');

const url = "mongodb://127.0.0.1:27017"
const dbName = 'LaFesti'


// router.get("/", function (req, res) {
//     res.send("HEY!! THERE")
// })
router.post("/address",function(req,res){
    MongoClient.connect(url,function(err,conn){
        var db = conn.db(dbName);
        db.collection("addresses").insertOne(req.body,function(err,data){
            console.log(data)
        })
    })
});
 
router.get("/loginuser",function(req,res){
    MongoClient.connect(url,function(err,conn){
        var db = conn.db(dbName);
        db.collection("users").find().toArray(function(err,data){
            res.send(data)
        })
    })
});

router.post("/register",function(req,res){
    MongoClient.connect(url,function(err,conn){
        var db = conn.db(dbName);
        db.collection("users").find({email:req.body.email})
        .toArray(function(err,data){
            db.collection("users").find({phoneno:req.body.phoneno})
            .toArray(function(err,data){
                if(data.length===0){
                    db.collection("users").insertOne(req.body,function(err,data){
                        console.log(data);
                    })                    
                }
                else {
                    console.log("Phone No. or Email ID Already Exists!!!")
                }
            })
        })
    })
})
router.put("/forgotpassword/:id", function (req, res) {
    MongoClient.connect(url, function (err, conn) {
        var db = conn.db(dbName);
        db.collection("users").updateOne({ _id: ObjectId(req.params.id) }, {
            $set: req.body
        }, function (err, data) {
            console.log(data)
        })
    })
})


module.exports=router;