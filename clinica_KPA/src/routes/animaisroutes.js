const express = require('express');
const router = express.Router();
const controller = require('../controllers/animaisController');

router.get('/:id/consultas', controller.getConsultasByAnimal);

module.exports = router;