const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  
  username: String,
  hash: String,
  salt: String,
  contactNo : Number,
  name : String,
  isStudent : {
      type : Boolean,
      default : true
  },
  profileId : String,
  rides : [ { type : Schema.Types.ObjectId , ref : 'Ride'} ]

});


mongoose.model('Users', UsersSchema);