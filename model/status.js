const { Sequelize } = require('sequelize');
const { dbSeq } = require('../config/sequelize');

const { DataTypes } = Sequelize;

const StatusModel = dbSeq.define('statuses', {
    status: {
        type: DataTypes.STRING
    }
})

module.exports = { StatusModel };