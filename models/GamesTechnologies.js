
module.exports = (sequelize, DataTypes) => {
  const Games = sequelize.define('GamesTechnologies', {
    GamesID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Games',
        key: 'id'
      }
    }
  });
  return Games;
}