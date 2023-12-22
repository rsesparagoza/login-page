const express = require('express');
const authController = require('../controllers/auth')
const router = express.Router();

router.get('/', authController.isLoggedIn, (req, res) => {
    res.render('index', {
        user: req.user
    });
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/profile', authController.isLoggedIn, (req, res) => {
    if(req.user){
        res.render('profile', {
            user: req.user
        });
    } else {
        res.redirect('/login');
    }
})

router.get('/forgot-password', (req, res) => {
    res.render('forgot-password');
});

router.get('/update-password', (req, res) => {
    res.render('update-password');
});


  

module.exports =  router; 