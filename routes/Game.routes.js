const controller = require('../controller/game.controller')
const router = require('express').Router();


router.get('/platforms', controller.getPlatforms);
router.get('/technologies', controller.getTechnologies);
router.get('/tags', controller.getTags);
router.post('/newGame', controller.createGame);
router.get('/allGame', controller.allGame);
router.get('/:id', controller.getGame);
router.get('/:idUser/Games', controller.getGameUser);

module.exports = router;