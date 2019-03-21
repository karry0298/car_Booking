var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const path = require('path');
const express = require('express')
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');
const basicAuth = require('express-basic-auth');




io.on('connection', function(socket){

  console.log("Accepting connection")
      socket.on('chat', function(msg){
          
      io.emit('chat', msg);
      console.log(msg)
  
      });
  
});


//Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));



//DB

require('./models/db')

//Authorization

// app.use(basicAuth({
//   authorizer: myAsyncAuthorizer,
//   authorizeAsync: true,
// }))

// function myAsyncAuthorizer(username, password, cb) {
//   if (username.startsWith('A') && password.startsWith('secret'))
//       return cb(null, true)
//   else
//       return cb(null, false)
// }



//Routes




app.get('/', function(req, res){
    res.send("Hello World");
  });


app.get('/login', (req , res)=>{

  res.send(req.headers)

})




http.listen(3000, function(){
  console.log('listening on *:3000');
});