
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const models = require('../models/database')

module.exports = (passport) => {
    passport.use ('local-signup',
        new LocalStrategy({ usernameField: 'Name', passwordField:'Password' },(name, password, done) => {
            models.User.findOne({ where: {Name: name} }).then(user => {
                if(!user) {
                    
                    return done(null, false, { message: 'That email is not registered' });
                   
                }
                //console.log(user)
                bcrypt.compare(password, user.Password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                      return done(null, user);
                    } else {
                      return done(null, false, { message: 'Password incorrect' });
                    }
                });
            })
        })
    )
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        models.User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}