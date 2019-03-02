const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', {
    Name: DataTypes.STRING,
    Lastname: DataTypes.STRING,
    Username: DataTypes.STRING,
    email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Description: DataTypes.STRING,
    Datesignup: {
        type: DataTypes.DATE,
        defaultValue: new Date(Date.now())
      }
}, {
    hooks : {
        beforeCreate : (User , options) => {
            {
                User.Password = User.Password && User.Password != "" ? bcrypt.hashSync(User.Password, 10) : "";
            }
        }
    }
});

User.associate = (models) => {
    models.User.belongsTo(models.Region, {foreignKey:'RegionID'});
    models.User.belongsTo(models.Role, {foreignKey:'RoleID'});
}


return User;
}