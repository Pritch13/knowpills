module.exports = function (sequelize, DataTypes) {

  var Alternative = sequelize.define("Alternative", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Alternative;

};