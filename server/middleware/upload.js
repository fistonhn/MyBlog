import multer from 'multer';

const storage = multer.diskStorage({
  
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },

    filename: function(req, file, cb){
        cb(null, new Date().getTime()/1000 + file.originalname );
    }
})
    

      const upload = multer({
      storage: storage,
      limits: {
        fieldSize: 1024 * 1024 * 10  
      }
       } ).single('urlToImage')



export default upload;