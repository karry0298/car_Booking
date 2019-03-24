const router = require('express').Router()
const imgur = require('imgur');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    let filename = file.originalname.split('.');
    cb(null, filename[0] + '-' + Date.now() + '.' +  filename[1])
  }
})
const upload = multer({storage});


router.route('/' )
    .post(upload.single('file') , (req , res) =>{
        
        console.log(req.file)
        // res.send("done")
      
        // A single image

        imgur.uploadFile(req.file.path)
        .then(function (json) {
            console.log(json.data);
            res.send(json)
        })
        .catch(function (err) {
            console.error(err.message);
            res.send(err)
        });        

    } )














module.exports = router