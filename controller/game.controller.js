
const models = require ('../models/database');
const fs     = require('fs');

exports.createGame = (req, res) => {
    let image_path = req.body.image;
    let image_data = fs.readFileSync(image_path);
    let base64data = image_data.toString('base64');
    models.Games.create({...req.body, PlatformID: 1, UsersID: 5, TechnologiesID:1})
       .then((newgame) => models.Images.create({
            GamesID: newgame.ID,
            picture : base64data
        }))

}

exports.allGame = (req, res) => {
    models.Games.findAll({   
        include: [
            { model:models.Technologies},
            { model:models.Platform}
        ]
    })
    .then(game => {
        res.json(game)
    })
    .catch(err => {
        console.log(err);
        res.status(404).send(err);
    })
}

exports.getGame = (req, res) => {
    let id = req.params.id;

    models.Games.findByPk(id, {   
        include: [ 
            { model:models.Technologies},
            { model:models.Platform},
            { model:models.Tag}]
    })
        .then(game => { 
        if(!game) {
            res.status(404).send('User not found')
        } else
            res.json(game);
        })
        .catch(err => {
            console.log(err);
            res.status(404).send(err);
        })
}