
module.exports = (sequelize, DataTypes) => {
    const Images = sequelize.define('Images', {
        picture: {
            type: DataTypes.TEXT
        },
        GamesID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Games',
                key: 'id'
            }
        }
    });
    // Images.associate = (models) => {
    //     models.Images.belongsTo(models.Games, {foreignKey:'GamesID'});
    // }
    return Images;
}