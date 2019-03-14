const models = require ('../models/database');
const passport = require('passport');

exports.allUsers = (req, res) => {
    models.User.findAll({   
        include: [ 
            { model:models.Role},
            { model:models.Region}]
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

    models.User.findByPk(id, {   
        include: [ 
            { model:models.Role},
            { model:models.Region}]
    })
        .then(user => { 
        if(!user) {
            res.status(404).send('User not found')
        } else
            res.json(user);
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
    
    models.User.create({...req.body})
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
        if(user) {
            res.json({
                id : user.id,
                name: user.name,
                lastname : user.lastname,
                username : user.username,
                email : user.email,
                description : user.description,
                datesignup : user.datesignup
            })
        } else {
            res.status(404).json(err)
        }

    })(req, res, next)
}

