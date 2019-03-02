const controller = require('../controller/user.controller')
const router = require('express').Router();

router.get('/allUsers', controller.allUsers);
router.get('/:id', controller.getUser);
router.post('/auth/signUp', controller.signUp);
router.post('/auth/signIn', controller.signIn);

module.exports = router;