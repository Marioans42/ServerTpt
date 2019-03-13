
module.exports = (sequelize, DataTypes) => {
    const Images = sequelize.define('Images', {
        picture: {
            type : DataTypes.BLOB('long')
        }
    });
    Images.associate = (models) => {
        models.Images.belongsTo(models.Games, {foreignKey:'GamesID'});
    }
    return Images;
}