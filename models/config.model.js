const mongoose = require("mongoose")
const Schema = mongoose.Schema

let configSchema = new Schema({
    code: {
        type: String,
        unique: true,
        index: true
    },
    name: String,
    values: Array,
    description: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

let Config = mongoose.model("Config", configSchema)

module.exports = Config
