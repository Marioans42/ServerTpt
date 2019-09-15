const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    description: DataTypes.STRING,
    datesignup: {
        type: DataTypes.DATE,
        defaultValue: new Date(Date.now())
      }
}, {
    hooks : {
        beforeCreate : (User , options) => {
            {
                User.password = User.password && User.password != "" ? bcrypt.hashSync(User.password, 10) : "";
            }
        }
    }
});

User.associate = (models) => {
//     models.User.belongsTo(models.Region, {foreignKey:'regionid'});
//    models.User.belongsTo(models.Role, {foreignKey:'roleid'});
//    models.User.belongsToMany(models.Games, {through :'DowloadedGames', foreignKey:'userID'});
}


return User;
}