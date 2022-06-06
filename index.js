const express = require('express');
const { checkSeq } = require('./config/sequelize');
const { BannerModel } = require('./model/banner');
const { StatusModel } = require('./model/status');
const App = express();

const PORT = 5055;

checkSeq();

App.use(express.json());

App.get('/', (req, res) => {
    res.status(200).send('<h1>Sequelize API</h1>');
})

// Konfigurasi middleware
App.get('/banner', async (req, res) => {
    try {
        let data = await BannerModel.findAll({
            include: [{
                model: StatusModel,
                required: true,
                attributes: [['status', 'status_banner']]
            }]
        });
        res.status(200).send(data);
    } catch (error) {
        console.log(error)
    }
})

App.post('/banner', async (req, res) => {
    try {
        let data = await BannerModel.create(req.body);
        console.log(data)
        res.status(200).send({
            success: true
        });
    } catch (error) {
        console.log(error)
    }
})

App.patch('/banner/:id', async (req, res) => {
    try {
        let data = await BannerModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        console.log(data)
        res.status(200).send({
            success: true
        });
    } catch (error) {
        console.log(error)
    }
})

App.delete('/banner/:id', async (req, res) => {
    try {
        let data = await BannerModel.destroy( {
            where: {
                id: req.params.id
            }
        });
        console.log(data)
        res.status(200).send({
            success: true
        });
    } catch (error) {
        console.log(error)
    }
})


App.listen(PORT, () => console.log('Sequelize API RUNNING', PORT));