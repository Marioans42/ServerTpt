

module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        Label: DataTypes.STRING,
        value: DataTypes.INTEGER
    });
    
    return Role;
}