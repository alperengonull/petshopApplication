const Petshop = require('../models/Petshop');


// Create a new petshop
exports.createPetshop = async (req, res) => {
    try {
        const { name, address } = req.body;

        const petshop = new Petshop({ name, address, owner: req.user.userId });
        await petshop.save();

        res.status(201).json({ message: "Petshop created successfully." });
    }
    catch (error) {
        res.status(500).json({error:"An error occured"});
    }
}


// Get all petshops
exports.allPetshops = async (req, res) => {
    try {
        const petshops = await Petshop.find();
        res.status(200).json(petshops);
    }
    catch (error) {
        res.status(500).json({error:"An error occured"});
    }
}


// Get all petshops owned by the authenticated user
exports.getAllPetshops = async (req, res) => {
    try {
        const petshops = await Petshop.find({ owner: req.user.userId });
        res.status(200).json(petshops);
    }
    catch (error) {
        res.status(500).json({error:"An error occured"});
    }
}

// Update a specific pet shop owned by the authenticated user
exports.updatePetshop = async (req, res) => {
    try {
        const { name, address } = req.body;
        const petshopId = req.params.id;

        const petshop = await Petshop.findById(petshopId);
        if (!petshop) {
            return res.status(404).json({ message: 'Petshop not found' });
        }

        if (petshop.owner.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'User not authorized' });
        }

        if (name) {
            petshop.name = name;
        }
        if (address) {
            petshop.address = address;
        }

        const updatedPetshop = await petshop.save();
        res.json(updatedPetshop);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a specific pet shop owned by the authenticated user
exports.deletePetshop = async (req, res) => {
    try {
        const petshopId = req.params.id;

        const petshop = await Petshop.findById(petshopId);
        if (!petshop) {
            return res.status(404).json({ message: 'Petshop not found' });
        }

        if (petshop.owner.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'User not authorized' });
        }

        await Petshop.findByIdAndDelete(petshopId);
        res.json({ message: 'Petshop deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
