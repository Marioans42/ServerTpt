const controller = require('../controller/user.controller')
const router = require('express').Router();

router.get('/allUsers', controller.allUsers);
router.get('/:id', controller.getUser);
router.post('/auth/signup', controller.signUp);
router.post('/auth/signin', controller.signIn);

module.exports = router;