const models = require('../models/database');
const friend = require('./friend.controller');
exports.getProfil = (req, res) => {
    let id = req.params.id;
    let id2 = req.params.id2;
    let state;

    const status = models.sequelize.query('select * from friends where (usersid = $1 and usersid2 = $2) or  (usersid = $2 and usersid2 = $1)',
    { bind: [id, id2] ,
      model : models.Friends,
      type: models.sequelize.QueryTypes.SELECT});
    
    const demandeur = models.sequelize.query('select * from friends where (usersid = $1 and usersid2 = $2)', {bind: [id, id2] ,
      model : models.Friends,
      type: models.sequelize.QueryTypes.SELECT})

    const demande = models.sequelize.query('select * from friends where (usersid = $1 and usersid2 = $2)', {bind: [id2, id] ,
      model : models.Friends,
      type: models.sequelize.QueryTypes.SELECT})


    const user = models.User.findByPk(id2);
    const game = models.Games.findAll({include: [
        { model:models.Technologies},
        { model:models.Platform},
        { model:models.Tag}
    ], where : {usersid: id2}})

    Promise
    .all([status, demandeur, demande, user, game])
    .then(resolve => {
        if(resolve[0].length == 0){
          state =0;
        }
        else if(resolve[0][0].state == 5){
          state = 10;
        }
        else{ //  if(resolve[0][0].state == 1)
          if(resolve[1][0]) {
            state = 5;
          }
          if(resolve[2][0]) {
            state = 6;
          }
        }
        res.status(200).json({
            isfriend : state,
            user : resolve[3],
            games : resolve[4]
            })
        })
    .catch(reject => res.status(501).json(reject))

}



