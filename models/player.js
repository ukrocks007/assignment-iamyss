const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    name: {
        type: String
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', playerSchema);
