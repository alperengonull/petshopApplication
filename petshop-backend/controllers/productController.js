const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    petshop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PetShop',
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);