require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./src/routes/index');
const cloudinary = require('cloudinary').v2;
const app = express();
const db = require('./src/models');

const PORT = process.env.PORT || 8000;

// Configuración de Cloudinary
cloudinary.config({
    cloud_name: 'dz0lruj7k',
    api_key: '128323134832632',
    api_secret: '04JixT8UcmHYY-QfbwSTBzT-L7I'
  });


// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// Rutas
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});
