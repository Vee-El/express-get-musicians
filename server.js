const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

//TODO

app.get('/musicians', async (req, res) => {
    const musiciansAll = await Musician.findAll();
    res.json(musiciansAll);
})

app.get('/musicians/:id', async (req, res) => {

    try {
        const musiciansID = await Musician.findByPk(req.params.id);

        if (!musiciansID) {
            throw new Error('Musician not found');
        } 
        
        res.json(musiciansID);
    
    } catch (error) {

        res.status(404).send({ error: error.message });
    }
});
app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})