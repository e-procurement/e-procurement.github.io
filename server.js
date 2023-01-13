const express = require('express');
const app = express();
app.use(express.static('/'));

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/index.html', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/src/search.html', function(req, res){
    res.sendFile(__dirname + '/src/search.html');
});
app.get('/src/insert.html', function(req, res){
    res.sendFile(__dirname + '/src/insert.html');
});
app.get('/src/login.html', function(req, res){
    res.sendFile(__dirname + '/src/login.html');
});
app.get('/src/register.html', function(req, res){
    res.sendFile(__dirname + '/src/register.html');
});