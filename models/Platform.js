module.exports = (sequelize, DataTypes) => {
    const Platform = sequelize.define('Platform', {
        label: DataTypes.STRING
    });

    Platform.associate = (models) => {
        models.Platform.belongsToMany(models.Games, {through :'GamesPlatforms', foreignKey:'PlatformID'});
    }

    return Platform;
}