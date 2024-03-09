const Product = require('../models/Products');
const Petshop = require('../models/Petshop');

// Add a new product to a specific pet shop
exports.addProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const petshopId = req.params.id;

        const petshop = await Petshop.findById(petshopId);
        if (!petshop) {
            return res.status(404).json({ message: 'Petshop not found' });
        }

        const product = new Product({ name, price, petshop: petshopId });
        await product.save();

        res.status(201).json({ message: "Product added successfully." });
    }
    catch (error) {
        res.status(500).json({error:"An error occured"});
    }
}

// Update a specific product in a pet shop
exports.updateProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const productId = req.params.id;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (product.petshop.toString() !== req.params.petshopId) {
            return res.status(403).json({ message: 'Product does not belong to the specified pet shop' });
        }

        if (name) {
            product.name = name;
        }
        if (price) {
            product.price = price;
        }

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a specific product from a pet shop
exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (product.petshop.toString() !== req.params.petshopId) {
            return res.status(403).json({ message: 'Product does not belong to the specified pet shop' });
        }

        await Product.findByIdAndDelete(productId);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all products from a specific pet shop
exports.getProducts = async (req, res) => {
    try {
        const petshopId = req.params.id;

        const petshop = await Petshop.findById(petshopId);
        if (!petshop) {
            return res.status(404).json({ message: 'Petshop not found' });
        }

        const products = await Product.find({ petshop: petshopId });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({error:"An error occured"});
    }
}
