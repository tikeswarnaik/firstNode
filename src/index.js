const express =  require('express');
const app = express();
const path = require('path');
require('../database/connection');
const signIn = require('../database/signin');
const signUp = require('../database/signUp');
const bodyParser = require('body-parser');
const { read } = require('fs');
// declaring the port
const port = process.env.PORT || 4050;

// for url encoded parser
const urlEncodedParser = bodyParser.urlencoded({extended: false});

// view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"../template/views"));

// for static thing
app.use(express.static(path.join(__dirname,"../public/")));




app.get("/", (req, res) => {
  res.render("index");
});

// using middleware to get the result
app.post("/", urlEncodedParser, (req, res) => {
  const person = req.body;
  // console.log(`Inside index req : `);
  // console.log(person);
  if (person.type === "signin") {
    delete person.type;
    signIn(person, res);
  } else if (person.type === "signup") {
    delete person.type;
    signUp(person, res);
  }
});

app.get("/thanks/:name",(req,res)=>{
    res.render("thanks",{name:req.params.name});
});
app.get("/project", (req, res) => {
  res.render("project");
});

app.get("/back/:name",(req,res)=>{
    res.render("welback",{name:req.params.name});
})


app.get("*",(req,res)=>{
    res.render("notFound");
})

app.listen(port,()=>{
    console.log("listening at port "+port);
})