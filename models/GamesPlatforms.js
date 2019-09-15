
module.exports = (sequelize, DataTypes) => {
  const Games = sequelize.define('GamesPlatforms', {
    GamesID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Games',
        key: 'id'
      }
    },
    PlatformId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Platforms',
        key: 'id'
      }
    }
  });
  return Games;
}