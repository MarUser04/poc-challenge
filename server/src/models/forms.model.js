// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const forms = sequelizeClient.define('forms', {
    name: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.DATE
    },
    email: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    budget: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updatedAt'
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  forms.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return forms;
};
