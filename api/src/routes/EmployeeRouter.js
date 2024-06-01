const { Router } = require('express');
const router = Router();
const { employee } = require('../controllers/employee/postEmployee');
const { oneEmployee } = require('../controllers/employee/getDetailsEmployee');
const { allEmployee } = require('../controllers/employee/getAllEmployee');
const multer = require('multer');
const path = require('path');
const { updateEmployee } = require('../controllers/employee/putUpdateEmployee');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});


// Configuración de `multer` para aceptar cualquier tipo de imagen
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|bmp|tiff|webp/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = file.mimetype.startsWith('image/');

    if (mimetype && extname) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  }
}).fields([
  { name: 'avatarValue', maxCount: 1 },
  { name: 'test1', maxCount: 1 },
  { name: 'test2', maxCount: 1 },
  { name: 'test3', maxCount: 1 },
  { name: 'test4', maxCount: 1 },
]);

router.post(
  '/',
  upload,
  employee
);
router.put('/:id',upload, updateEmployee);

router.get('/:idSST', oneEmployee);
router.get('/', allEmployee);

module.exports = router;
