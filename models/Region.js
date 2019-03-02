module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define('Region', {
        Name: DataTypes.STRING
    });

    /*Region.associate = (models) => {
        models.Region.hasOne(models.Users)
    }*/

    return Region;
}