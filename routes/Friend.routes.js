const controller = require('../controller/friend.controller')
const router = require('express').Router();

router.post('/add/:id/:id2', controller.addfriend);
router.post('/confirm/:id/:id2', controller.confirm);

module.exports = router;