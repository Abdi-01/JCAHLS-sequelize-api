const { Sequelize } = require('sequelize');

// Konfigurasi koneksi
const dbSeq = new Sequelize('commerce-sequelize', 'AL', '007@001', {
    host: 'localhost',
    dialect: 'mysql'
})

const checkSeq = async () => {
    try {
        await dbSeq.authenticate();
        console.log('Connection Success ✅');
    } catch (error) {
        console.log('Unable to connect database');
    }
}

module.exports = {
    dbSeq, checkSeq
}