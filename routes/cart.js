let express = require('express')
let router = express.Router()

var path = require("path")

const { MongoClient, ObjectId } = require('mongodb');

const url = "mongodb://127.0.0.1:27017"
const dbName = 'LaFesti'

// router.get("/", function (req, res) {
//     res.send("HEY!! THERE")
// })

router.post("/InsertCart", function (req, res) {
    console.log(req.body);
    MongoClient.connect(url, function (err, con) {
        var db = con.db("LaFesti")
        db.collection("CartC").findOne({ user_id: ObjectId(req.body.user_id) }, (err, data) => {
            console.log(data);
            if (data) {
                db.collection("CartC").updateOne({user_id: ObjectId(req.body._id) },{$set:
                        {
                            menu:req.body.menu
                        }
                        },
                        function (err, data) {
                            res.send(data)
                        })
            }
            else {
                db.collection("CartC").insertOne(req.body, function (err, data) {
                    console.log(data);
                    res.send("success")
                })
            }
        })
    })
})

router.get("/viewCart/:id", function (req, res) {
    console.log(req.body);

    MongoClient.connect(url, (err, con) => {

        var db = con.db("LaFesti")

        db.collection("CartC").find({ user_id: req.params.id }).toArray((err, data) => {
            db.collection("Menu_Collection").findOne({ _id: data.menu_id }, (err, data) => {
                // console.log(data);
                res.send(data)
            })
            // res.send(data)
        })
    })
})

router.post("/viewCartItems", function (req, res) {
    console.log(req.body);
    MongoClient.connect(url, (err, con) => {
        var db = con.db("LaFesti")
            db.collection("Menu_Collection").findOne({ _id: ObjectId(req.body[0]) }, (err, data) => {
                res.send(data)
        })
    })
            
})




module.exports = router;