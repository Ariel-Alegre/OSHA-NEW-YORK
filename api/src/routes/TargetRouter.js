const {Router} = require('express');
const router= Router();
const { CardOrange } = require('../controllers/CardOrangeEmployee/postCardOrange');
const { detailCardOrange } = require('../controllers/CardOrangeEmployee/getCardOrange');
const { AllCardOrange } = require('../controllers/CardOrangeEmployee/getAllCardOrange');





router.post('/', CardOrange )
router.get('/:card', detailCardOrange )
router.get('/', AllCardOrange )




module.exports = router
