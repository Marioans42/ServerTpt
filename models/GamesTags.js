
module.exports = (sequelize, DataTypes) => {
  const Games = sequelize.define('GamesTags', {
    GamesID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Games',
        key: 'id'
      }
    },
    // TagID: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'Tags',
    //     key: 'id'
    //   }
    // }
  });
  return Games;
}