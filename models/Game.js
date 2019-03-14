
module.exports = (sequelize, DataTypes) => {
    const Games = sequelize.define('Games', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        releaseDate: {
            type: DataTypes.DATE,
            defaultValue: new Date(Date.now())
          },
        validadmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          },
        link:DataTypes.STRING
    });

    Games.associate = (models) => {
        models.Games.belongsTo(models.User, {foreignKey:'UsersID'});
        //models.Games.belongsTo(models.Images, {foreignKey:'GamesID'});
        models.Games.belongsToMany(models.Platform, {through :'GamesPlatforms', foreignKey:'GamesID'});
        models.Games.belongsToMany(models.Technologies, {through :'GamesTechnologies', foreignKey:'GamesID'});
        models.Games.belongsToMany(models.Tag, {through :'GamesTags', foreignKey:'GamesID'});
    }

    return Games;
}