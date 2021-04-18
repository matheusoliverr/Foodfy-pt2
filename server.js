const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

nunjucks.configure("views", {
    express: server
})

server.set("view engine", "njk")

server.use(express.static("public"))

server.get("/", function(req,res){
    return res.render("index", {recipes: data})
})

server.get("/about", function(req,res){
    return res.render("about")
})

server.get("/recipes", function(req,res){
    return res.render("recipes", {recipes: data})
})

server.get("/recipes/:index", function(req,res){
    const recipeIndex = req.params.index
    return res.render("recipe", {recipe: data[recipeIndex]})
})

server.listen(5000, function(){
    return console.log("Server is running")
})