
module.exports = (sequelize, DataTypes) => {
  const Games = sequelize.define('DowloadedGames', {
    GamesID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Games',
        key: 'id'
      }
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  });
  return Games;
}