const router = require("express").Router();
const Team = require('../models/team');

router.get("/", async (req, res) => {
    try {
        let teams = await Team.find({});
        res.status(200).json(teams);
    } catch (ex) {
        console.log(ex);
        res.status(400).json(ex);
    }
});

router.post("/", async (req, res) => {
    try {
        let name = req.body.name;

        let existing = await Team.findOne({ name: name })

        if (existing) {
            throw {
                message: "Team already exists"
            }
        }
        let team = new Team({
            name: name
        });
        team = await team.save();
        res.status(200).json(team);
    } catch (ex) {
        console.log(ex);
        res.status(400).json(ex);
    }
});

router.post('/remove', async (req, res) => {
    try {
        let id = req.body.id;
        let op = await Team.findByIdAndDelete(id);
        res.status(200).json(op);
    } catch (ex) {
        console.log(ex);
        res.status(400).json(ex);
    }
});

module.exports = router;