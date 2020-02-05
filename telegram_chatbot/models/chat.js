module.exports = (sequelize, DataTypes) => {
    return sequelize.define('chat', {
      keyword: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      story: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('now()'),
      },
    }, {
      timestamps: false,
    });
  };