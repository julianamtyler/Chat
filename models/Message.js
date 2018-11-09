const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    name: String,
    message: String
})

module.exports = mongoose.model('Messages', chatSchema)