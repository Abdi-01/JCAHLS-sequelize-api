const { Sequelize } = require('sequelize');
const { dbSeq } = require('../config/sequelize');
const { StatusModel } = require('./status');

const { DataTypes } = Sequelize;

const BannerModel = dbSeq.define('banners', {
    statusId: {
        type: DataTypes.INTEGER
    },
    src: {
        type: DataTypes.STRING
    }
})

//  Konfigurasi join
BannerModel.belongsTo(StatusModel);

module.exports = { BannerModel };