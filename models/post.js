module.exports = function (sequelize, DataTypes) {

  var Post = sequelize.define("Post", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Post.associate = function (models) {
    Post.hasMany(models.Comment, {
      onDelete: "cascade"
    });
  };

  return Post;

};