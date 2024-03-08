const mongoose = require('mongoose');

const PetShopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    products: [{                // Array of products BUGUN EKLENDI
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]  
});

module.exports = mongoose.model('PetShop', PetShopSchema);