const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController');
const petshopController = require('./controllers/petshopController');
const auth = require('./middleware/auth');

// User public routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Petshop public routes
router.get('/petshops', petshopController.allPetshops);

// Protected user route 
router.put('/profile', auth, userController.updateProfile);
router.delete('/deleteprofile', auth, userController.deleteUser);

// Protected petshop routes
router.post('/createpetshop', auth, petshopController.createPetshop);
router.get('/petshops', auth, petshopController.getAllPetshops);
router.put('/petshop/:id', auth, petshopController.updatePetshop);
router.delete('/petshop/:id', auth, petshopController.deletePetshop);


module.exports = router;