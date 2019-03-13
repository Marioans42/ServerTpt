const controller = require('../controller/profil.controller')
const router = require('express').Router();

router.get('/:id', controller.getProfil);

module.exports = router;