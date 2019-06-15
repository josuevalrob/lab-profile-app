const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');

router.post('/register', auth.register);
// TODO: authenticate, logout, get profile & edit profile routes

router.post('/login', auth.authenticate);

router.get('/getProfile/:id', auth.getProfile);

router.put('/editProfile/:id', auth.editProfile);

router.get('/logout', auth.logout);

module.exports = router;
