const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    type: { type: Number, required: true }, // 0 for buyer, 1 for seller
});


module.exports = mongoose.model('User', UserSchema);