module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
        label: DataTypes.STRING
    });

    // Tag.associate = (models) => {
    //     models.Tag.belongsToMany(models.Games, {through :'GamesTags', foreignKey:'TagID'});
    // }


    return Tag;
}