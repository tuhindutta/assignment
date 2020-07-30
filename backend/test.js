// const http = require('http');
// const hostname = 'localhost';
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

// https://mongoosejs.com/docs/
mongoose.connect('mongodb://localhost/contact', {useNewUrlParser: true});
const port = 8000;

// Throwback connection success
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We are connected to the database")
});

// Define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    continfo: String,
    message: String
  });

// Prepare model
var Contact = mongoose.model('Contact', contactSchema);

//app.use("/static", express.static("static")); //serving & intoducing static folder to express
app.set('view engine', 'pug'); //setting pug as template (view) engine
// app.set('views', path.join(__dirname, "views")); //joining vi/ews direc. for storing templates

app.get('/', function (req, res) {
    res.status(200).render('index')
});

app.get('/index', function (req, res) {
    res.status(200).render('index')
});

// app.get("/", (req, res)=>{
//     res.send("This is my first express insatallation and publish")
// });

app.get('/contact', (req, res)=>{
    // const content = "This is a new line"
    // const newline = {"entry":content}
    // res.status(200).render('index', newline)
    res.status(200).render('contact')
});

app.get('/projects', (req, res)=>{
    res.status(200).render('projects')
});


app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(404).send("This item has NOT been saved to the database")
    });
})

// Start the nodejs server
app.listen(port, /*hostname,*/ ()=>{
    console.log(`Hosting started at $(port)`)
});