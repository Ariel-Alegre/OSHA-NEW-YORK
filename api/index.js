require('dotenv').config()
const express = require('express');
const cors = require('cors')
const path = require('path')
const routes = require('./src/routes/index')
const cloudinary = require('cloudinary').v2;
const app = express();
const fileUpload = require("express-fileupload")
const db = require('./src/models')

const PORT = process.env.PORT || 8000




//middleware
app.use(cors())
app.use(express.urlencoded({extended: true})) 
app.use(express.json())
app.use(fileUpload({
    useTempFiles:true,
    limits: {fileSize: 50 * 2024 * 1024}
}))



app.use('/', routes)





// Configuration 


//static diles 
cloudinary.config({
    cloud_name: "dz0lruj7k",
    api_key: "128323134832632",
    api_secret: "04JixT8UcmHYY-QfbwSTBzT-L7I"
});



    app.listen(PORT , () => {
      console.log('%s listening at 3001'); // eslint-disable-line no-console
    });

