const team = require("./team");
const player = require("./player");

module.exports = (app) => {
    app.use("/api/team", team);
    app.use("/api/player", player);
}