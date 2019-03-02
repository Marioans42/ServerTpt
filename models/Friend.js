
module.exports = (sequelize, DataTypes) => {
    const Friends = sequelize.define('Friends', {
        label: DataTypes.STRING,
        value: DataTypes.INTEGER
    });
    return Friends;
}