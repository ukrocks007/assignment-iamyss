const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }],
    name: {
        type: String,
        unique: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);
