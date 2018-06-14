module.exports = function (sequelize, DataTypes) {

  var Comment = sequelize.define("Comment", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Comment.associate = function (models) {
    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Comment;
};