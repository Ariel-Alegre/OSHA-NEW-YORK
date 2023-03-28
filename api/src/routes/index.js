const {Router} = require('express');
const router= Router();
const employeeRouter = require('./EmployeeRouter');
const TargetRouter = require('./TargetRouter');
/*
const storage = require('../controllers/upload');
const multer = require('multer');
const uploader = multer({storage}) ;
const cloudinary = require('cloudinary').v2;





 router.post('/upload' uploader.single('file') , async (req, res) => {
   /*  const { file, body } = req  */
   /* const files = req.files.image


    const result = await cloudinary.uploader.upload(files.tempFilePath, {
        public_id: `${Date.now()}`,
        resource_type: "auto",
        folder: "images"
    }) 

    const s = await Avatars.create({
        image: result.url
    })


   if (file && body) {
        const newImage = Employee.create({      
            fileName: body.name,
            urlFile: `http://localhost:8000/${file.filename}`,
        
           




        }) 

        res.json({
            msg :s
        }) */
    
 /* });   */



/* router.get('/download', async (req, res) => {
    const  images = await Employee.findAll()

    res.json(images)


}) 
 */


router.use('/employee', employeeRouter,);
router.use("/target", TargetRouter);


/* router.post('/upload', controller.upload, controller.uploadFile) */





module.exports = router
