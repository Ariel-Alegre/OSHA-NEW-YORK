const {Router} = require('express');
const router= Router();
const { employee } = require('../controllers/employee/postEmployee');
const { oneEmployee } = require('../controllers/employee/getDetailsEmployee');
const { allEmployee } = require('../controllers/employee/getAllEmployee');







router.post('/', employee )
router.get('/:idSST', oneEmployee )
router.get('/', allEmployee )





module.exports = router
