const controller = require('../controller/profil.controller')
const router = require('express').Router();

router.get('/:id/:id2', controller.getProfil);

module.exports = router;