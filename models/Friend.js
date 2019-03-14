
module.exports = (sequelize, DataTypes) => {
    const Friends = sequelize.define('Friends', {
        usersID: DataTypes.INTEGER,
        usersID2: DataTypes.INTEGER,
        state: DataTypes.INTEGER
    });
    return Friends;
}