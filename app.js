const express= require('express');
const app= express();

const path= require('path');

app.use(express.static("public"));

app.listen(3001, ()=>console.log('servidor corriendo'));


app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname,'views/home.html'))
});

app.get('/login', function (req,res) {
    res.sendFile(path.join(__dirname,'views/login.html'))
});

app.get('/register', function (req,res) {
    res.sendFile(path.join(__dirname,'views/register.html'))
});