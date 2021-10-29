let express = require('express')
let router = express.Router()

var path = require("path")

const { MongoClient, ObjectId } = require('mongodb');

const url = "mongodb://127.0.0.1:27017"
const dbName = 'LaFesti'





// router.get("/", function (req, res) {
//     res.send("Hello!! THERE")
// })

router.get("/view", function (req, res) {
    MongoClient.connect(url, (err, con) => {
        var db = con.db("LaFesti")
        db.collection("Menu_Collection").find()
            .toArray((err, data) => {
                //console.log(data);
                res.send(data)
            })
    })
})

router.get("/menu/:id", (req, res) => {
    MongoClient.connect(url, function (err, conn) {
        var db = conn.db("LaFesti")
        db.collection("Menu_Collection").find({ _id: ObjectId(req.params.id) }).toArray((err, data) => {
            res.send(data)
        })
    })
})

router.post("/InsertMenu", function (req, res) {
    console.log(req.body);
    MongoClient.connect(url, function (err, con) {
        var db = con.db("LaFesti")
        db.collection("Menu_Collection").insertOne(req.body, function (err, data) {
            // console.log(data);
            res.send("success")
        })
    })
})

router.patch('/UpdateMenu/:id', (req, res) => {
    MongoClient.connect(url, (err, conn) => {
        var db = conn.db('LaFesti');
        db.collection('Menu_Collection').updateOne(
            { _id: ObjectId(req.params.id) },
            { $set: req.body },
            (err, data) => {
                res.send(data)
            }
        )
    })
})

router.delete('/DeleteMenu/:id', (req, res) => {
    MongoClient.connect(url, (err, conn) => {
        var db = conn.db('LaFesti');
        db.collection('Menu_Collection').findOneAndDelete(
            { _id: ObjectId(req.params.id) },
            { $set: req.body },
            (err, data) => {
                res.send(data)
            }
        )
    })
})



module.exports=router;