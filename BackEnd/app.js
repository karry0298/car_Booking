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


      socket.on('ready', function(msg){
      
      console.log("driver", msg.id , " is ready")

      socket.join('driver')
  
      });

      socket.on('find', function(msg){
        
        console.log("Finding Nemo" , msg)
        socket.to('driver').emit('request', { msg })

        });

      // socket.on('request', function(msg){
        
      //   console.log(msg)

      //   });
  
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


app.get('/request', function(req, res){
  res.sendFile( __dirname + '/views/request.html' )
});

app.get('/', function(req, res){
    res.sendFile( __dirname + '/views/driver.html' )
  });




app.get('/login', (req , res)=>{

  res.send(req.headers)

})




http.listen(3000, function(){
  console.log('listening on *:3000');
});