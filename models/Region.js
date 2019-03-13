module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define('Region', {
        name: DataTypes.STRING,
        code : DataTypes.INTEGER
    });

    /*Region.associate = (models) => {
        models.Region.hasOne(models.Users)
    }*/

    return Region;
}