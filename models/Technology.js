module.exports = (sequelize, DataTypes) => {
    const Technology = sequelize.define('Technologies', {
        label: DataTypes.STRING
    });

    Technology.associate = (models) => {
        models.Technologies.belongsToMany(models.Games, { through :'GamesTechnologies', foreignKey:'TechnologiesID'});
    }

    return Technology;
}