'use strict'

const models = require ('../models/database');
const passport = require('passport');

exports.allUsers = (req, res) => {
    models.User.findAll({   
        include: [{
            model: models.Role
        }]
    })
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        console.log(err);
        res.status(404).send(err);
    })
}

exports.getUser = (req, res) => {
    let id = req.params.id;

    models.User.findById(id)
        .then(user => {
            res.json({user : user});
        })
        .catch(err => {
            console.log(err);
            res.status(404).send(err);
        })
}

exports.signUp = (req, res) => {
    /*let newUser = {
        Name : req.body.Name,
        Username: req.body.Username,
        Lastname: req.body.Lastname,
        email: req.body.email,
        Password: req.body.Password,
        Description: req.body.Description
    };*/
    
    models.User.create({...req.body,RoleID: 1, RegionID:1})
        /*.then(newUser => newUser.createRole ({
            label: 'admin',
            value: 1
        }))*/
        .then(newUser => {
            res.json(newUser);
        })
        .catch(err => {
            console.log(err);
            res.status(404).send(err);
        })
}

exports.signIn = (req, res, next) => {
    passport.authenticate('local-signup',  (err, user) => {
        res.json(user)
    })(req, res, next)
}

