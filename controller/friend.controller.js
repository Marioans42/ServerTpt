//(userID1, useriD2)
/*userID1 current user demandeur userID2 demandé*/

/*
anaty base
etat 1 demande
etat 5 ami
*/   

/*
etat averina
0: tsy amis
10: amis
5: demandeur
6: demandé
*/

  const models = require ('../models/database');


  exports.addfriend = (req, res) => {
    let id = req.params.id; //current user
    let id2 = req.params.id2;

    models.sequelize.query("insert into Friends(usersid,usersid2,state)  values ($1,$2, '1')",
    { bind: [id, id2] ,
      model : models.Friends,
      type: models.sequelize.QueryTypes.INSERT})
    .then(query => res.status(200).json(query))
    .catch (err => res.status(404).json(err))
  }

  exports.confirm = (req, res) => {
    let id = req.params.id; //current user
    let id2 = req.params.id2;

    models.sequelize.query('update friends set state = 5 where (usersid =$1 and usersid2 =$2) ',
    { bind: [id, id2] ,
      model : models.Friends,
      type: models.sequelize.QueryTypes.UPDATE})
    .then(query => res.status(200).json(query))
    .catch (err => res.status(404).json(err))

  }

  /*exports.isFriend = (req , res) => {
    let id = req.params.id; //current user
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

      Promise
      .all([status, demandeur, demande])
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
        res.json({isfriend : state})
      })
      .catch(reject => res.status(501).json(reject))
      
    
  }*/

