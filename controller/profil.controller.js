const models = require('../models/database');

exports.getProfil = (req, res) => {
    let id = req.params.id;

    const user = models.User.findByPk(id, {   
        include: [ 
            { model:models.Role},
            { model:models.Region}]
    });
    const game = models.Games.findAll({include: [
        { model:models.Technologies},
        { model:models.Platform},
        { model:models.Tag}
    ], where : {usersid: id}})

    Promise
    .all([user, game])
    .then(resolve => res.status(200).json({
        user : resolve[0],
        games : resolve[1]
        }))
    .catch(reject => res.status(501).json(reject))

}

