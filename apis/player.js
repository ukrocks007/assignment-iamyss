const router = require("express").Router();
const Player = require('../models/player');

router.get("/", async (req, res) => {
    try {
        let players = await Player.find({});
        res.status(200).json(players);
    } catch (ex) {
        console.log(ex);
        res.status(400).json(ex);
    }
});

router.post("/", async (req, res) => {
    try {
        let name = req.body.name;
        let team = req.body.team;
        let player = new Player({
            name: name,
            team: team
        });
        player = await player.save();
        res.status(200).json(player);
    } catch (ex) {
        console.log(ex);
        res.status(400).json(ex);
    }
});

module.exports = router;