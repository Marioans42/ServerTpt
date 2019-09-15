const controller = require('../controller/game.controller')
const router = require('express').Router();

router.post('/newGame', controller.createGame);
router.get('/allGame', controller.allGame);
router.get('/:id', controller.getGame);
router.get('/:idUser/Games', controller.getGameUser);

module.exports = router;