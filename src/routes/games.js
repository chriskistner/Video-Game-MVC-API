const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/games');

router.get('/', ctrl.getAllGames);
router.get('/:id', ctrl.getGame);
router.delete('/:id', ctrl.deleteGame);
router.post('/', ctrl.newGame);
router.put('/:id', ctrl.updateGame);

module.exports = router