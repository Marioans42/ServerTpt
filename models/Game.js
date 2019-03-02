
module.exports = (sequelize, DataTypes) => {
    const Games = sequelize.define('Games', {
        Title: DataTypes.STRING,
        Description: DataTypes.STRING,
        ReleaseDate: DataTypes.DATE,
        Validadmin: DataTypes.BOOLEAN,
        Link:DataTypes.STRING
    });
    return Games;
}