const multer = require('multer')
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("path is "+__dirname, '../Uploads');
        
      cb(null, path.join(__dirname, '../Uploads'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })
  const fileFilter =(req, file, cb) =>{
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only JPEG and PNG files are allowed!'));
    }
    // if(file.mimetype == "image/jpeg" || file.mimetype == "image/png")
    //     {cb(null, true)}
    // else
    // {cb(null, false)}
  }
module.exports = multer({
    storage:storage,
    fileFilter: fileFilter,
    limits:{
        fileSize: 1024*1024*5
    } 
})
