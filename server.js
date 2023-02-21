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

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})