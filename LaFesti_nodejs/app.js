
var express = require('express');
var app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const cors =  require("cors")
app.use(cors())

let login = require('./routes/login')
let rest = require('./routes/restaurants')
let menu = require('./routes/menu')
let cart = require('./routes/cart')
let getCart = require('./routes/getCart')
let pay = require('./routes/payment')
let track = require('./routes/tracking')
let profile = require('./routes/profile')

app.use('/logreg',login)
app.use('/rest',rest)
app.use('/menu',menu)
app.use('/cart',cart)
app.use('/getCart',getCart)
app.use('/pay',pay)
app.use('/track',track)
app.use('/profile',profile)


app.listen(2555, function () {
    console.log(" running 2555")
})