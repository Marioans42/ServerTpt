
const models = require('../models/database');
const fs = require('fs');
const convertBase64 = require('base64-arraybuffer');

exports.createGame = async (req, res) => {
    console.log("atooo")
    // let image_path = req.body.image;
    // let image_data = fs.readFileSync(image_path);
    // let base64data = image_data.toString('base64');
    let base64data = req.body.image;
    models.Games.create({ ...req.body })
        .then(async (newgame) => {

            newgame = newgame.dataValues;
            console.log("hahahaha", newgame)
            for (let i = 0; i < req.body.platforms.length; i++) {
                await models.GamesPlatforms.create({
                    PlatformId: req.body.platforms[i],
                    GamesID: newgame.id
                })
            }

            for (let i = 0; i < req.body.technologies.length; i++) {
                await models.GamesTechnologies.create({
                    TechnologyId: req.body.technologies[i],
                    GamesID: newgame.id
                })
            }

            for (let i = 0; i < req.body.tags.length; i++) {
                await models.GamesTags.create({
                    TagId: req.body.tags[i],
                    GamesID: newgame.id
                })
            }

            await models.Images.create({
                GamesID: newgame.id,
                picture: base64data
            })

            let game = await models.Games.findByPk(newgame.id, {
                include: [
                    { model: models.Technologies },
                    { model: models.Platform },
                    { model: models.Tag },
                ]
            })

            let image = await models.Images.findAll({
                GamesID: game.ID
            })
            game.dataValues.images = image;
            res.status(200).json({ game });

        })
}

exports.allGame = async (req, res) => {
    models.Games.findAll({
        include: [
            { model: models.Technologies },
            { model: models.Platform },
            { model: models.Tag }
        ]
    })
        .then(async  game => {
            for (let i = 0; i < game.length; i++) {
                console.log("avant")
                let image = await models.Images.findAll({
                    GamesID: game.ID
                })
                console.log("apres")
                console.log("ahahahahahah",image[0].dataValues.picture);
                // game[i].dataValues.images = image[0].dataValues.picture.toString();
                game[i].dataValues.images = image;
                // console.log('game[' + i + ']', game[i])
            }
            res.status(200).json({ game })
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
            { model: models.Technologies },
            { model: models.Platform },
            { model: models.Tag },
        ]
    })
        .then(async (game) => {
            if (!game) {
                res.status(404).send('User not found')
            } else {
                let image = await models.Images.findAll({
                    GamesID: game.id
                })
                console.log(image);
                game.dataValues.images = image;
                console.log('game', game)
                res.status(200).json({ game })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(404).send(err);
        })
}

// exports.getDowloadedGame = (req, res) => {
//     let iduser = req.params.id;

// models.Games.findAll(
//         {
//             where: {
//                 userId : iduser
//             }
//         }, {   
//         include: [ 
//             { model:models.Technologies},
//             { model:models.Platform},
//             { model:models.Tag},
//         ]
//     })
//         .then(game => { 
//         if(!game) {
//             res.status(404).send('User not found')
//         } else
//             res.status(200).json({game});
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(404).send(err);
//         })
// }