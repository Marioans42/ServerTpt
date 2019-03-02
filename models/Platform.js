module.exports = (sequelize, DataTypes) => {
    const Platform = sequelize.define('Platforms', {
        label: DataTypes.STRING
    });
    return Platform;
}