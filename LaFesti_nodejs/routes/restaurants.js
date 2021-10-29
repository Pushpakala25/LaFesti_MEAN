let express = require('express')
let router = express.Router()

var path = require("path")

const { MongoClient, ObjectId } = require('mongodb');

const url = "mongodb://127.0.0.1:27017"
const dbName = 'LaFesti'

router.get("/", function (req, res) {
    res.send("HEY!! THERE")
})


router.get("/restaurant",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db(dbName)
        db.collection("RestaurantsProfile").find().toArray((err,data)=>{
            // console.log(data)
            res.send(data)
        })
    })
})

router.get("/restaurant/deliveryTime",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db(dbName)
        db.collection("RestaurantsProfile").find().sort({DeliveryTime:1}).toArray((err,data)=>{
            res.send(data)
        })
    })
})

router.get("/restaurant/Cuisines",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db(dbName)
        db.collection("RestaurantsProfile").find().sort({Cuisine:1}).toArray((err,data)=>{
            res.send(data)
        })
    })
})

router.get("/restaurant/Reviews",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db(dbName)
        db.collection("RestaurantsProfile").find().sort({Reviews:-1}).toArray((err,data)=>{
            res.send(data)
        })
    })
})

router.get("/restaurant/Rating",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db(dbName)
        db.collection("RestaurantsProfile").find().sort({Rating:-1}).toArray((err,data)=>{
            res.send(data)
        })
    })
})

router.get("/restaurant/VegOnly",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db(dbName)
        db.collection("RestaurantsProfile").find().filter({Veg:"1"}).toArray((err,data)=>{
            res.send(data)
        })
    })
})

router.post("/insertrest",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db(dbName)
        db.collection('RestaurantsProfile').insertMany(req.body,function(err,data){
            // console.log(data)
            res.send(data)
            res.send("success")
        })
    })
})

router.post("/deleterest/:id",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db(dbName)
        db.collection('RestaurantsProfile').findOneAndDelete({_id: ObjectId(req.params.id)},function(err,data){
            res.send(data)
        })
    })
})

router.patch('/updaterest/:id',(req,res) => {
    MongoClient.connect(url,(err,conn) => {
        var db = conn.db(dbName);
        db.collection('RestaurantsProfile').updateOne({_id : ObjectId(req.params.id)},{$set:req.body},(err,data) => {
            res.send(data)
            })
        })
    })






module.exports=router;