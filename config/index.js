require('dotenv').config()

module.exports = {
    mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/teams",
    port: process.env.SERVER_PORT || 8080,
    corsHeaders: ['Link']
}