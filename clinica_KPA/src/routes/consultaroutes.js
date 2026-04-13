const express = require ('express');
const router = express.Router();
const controller = require ('../controllers/consultasController');
router.get('/',controller .getAll); 
router.get('/:id',controller.getById);
router.post('/:id',controller.create);
router.put('/:id',contorller.uptade);
router.delete('/:id',controller.remove);

module.exports = router;
