
const Mongoose = require('mongoose');
const User = Mongoose.model('User');
const Driver = Mongoose.model('Driver');


module.exports.createUser  = (req , res) =>{
    let b = req.body;
    let query = {
        username : b.username,
        hash : b.hash || null,
        salt : b.salt || null,
        contactNo : b.contactNo,
        name : b.name || 'abby' ,
        isStudent : b.isStudent || true,
        rating : 0.0
    }

    User.create( query , (err , data)=>{

        if(err){
            res.send({err})
        } else{
            res.send({data})
        }

    } )
    

}

module.exports.findUserbyUsername = (req , res) =>{

    let query = {

    }

    User.findOne(query , (err , data)=>{

        if(err){
            res.send({err})
        } else{
            res.send({data})
        }

    })

}

module.exports.createDriverProfile = ( req , res ) =>{
    let b = req.body
    var userId = req.params.id;
    let query = {
        carModel : b.carModel,
        carNumber : b.carNumber,
        photoUrl : b.photoUrl,
        licenseUrl : b.licenseUrl,
        experienced : b.experienced
    }

    Driver.create( query , (err , data)=>{

        if(err){
            res.send({err})
        } else{
            var profileId = data._id;

            User.findByIdAndUpdate(userId , { profileId }).then((doc)=>{

                res.send({doc})
        
            }).catch((errr)=>res.send({err : errr}))

        }

    } )


}