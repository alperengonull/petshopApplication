const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// User registration
exports.register = async (req, res) => {
    try {
        const { username, email, password, type } = req.body;
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const newUser = new User({ username, email, password, type });
        const salt = await bcrypt.genSalt(12);
        newUser.password = await bcrypt.hash(password, salt);
        await newUser.save();
        res.status(201).json({ message: "User registered successfully." });
    }
    catch (error) {
        res.status(500).json({error:"An error occured"});
    }
}

//  User login
exports.login = async (req, res) => {
    try { 
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }   
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        
        const token = jwt.sign({ userId: user._id, username: user.username, type: user.type },'35b3c9d83f56223ba9bf1e5e50e19c59', { expiresIn: '1w' });
        res.status(200).json({ token, type: user.type, message: "User authenticated successfully." });
    } catch (error) {
        res.status(500).json({error:"An error occured"});
    }
}

// Update user profile
exports.updateProfile = async (req, res) => {
    try {
        const { username, email } = req.body;
        const userId = req.user.userId;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (username) {
            user.username = username;
        }
        if (email) {
            user.email = email;
        }

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Delete user profile
exports.deleteUser = async (req, res) => {
    try {
        const userId = req.user.userId;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await User.findByIdAndDelete(userId);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};