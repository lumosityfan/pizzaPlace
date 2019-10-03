var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/order", function(req, res){
    res.render("order");
});

app.listen(3000, function(){
    console.log("YOU HAVE REACHED THE PIZZA PLACE SERVER");
});