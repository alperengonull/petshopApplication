const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const petshopController = require('./controllers/petshopController');
const productController = require('./controllers/productController');
const auth = require('./middleware/auth');

// User public routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Petshop public routes
router.get('/petshops', petshopController.allPetshops);
router.get('/petshops/search', petshopController.searchPetshops);

// Protected user route 
router.put('/profile', auth, userController.updateProfile);
router.delete('/deleteprofile', auth, userController.deleteUser);

// Protected petshop routes
router.post('/createpetshop', auth, petshopController.createPetshop);
router.get('/petshops', auth, petshopController.getAllPetshops);
router.put('/petshop/:id', auth, petshopController.updatePetshop);
router.delete('/petshop/:id', auth, petshopController.deletePetshop);

// Protected product routes
// router.post('/petshop/:id/product', productController.addProduct);
// router.put('/petshop/:petshopId/product/:id', productController.updateProduct);
// router.delete('/petshop/:petshopId/product/:id', productController.deleteProduct);
// router.get('/petshop/:id/products', productController.getProducts);
router.post('/petshop/:id/product', auth, productController.addProduct);
router.put('/petshop/:petshopId/product/:id', auth, productController.updateProduct);
router.delete('/petshop/:petshopId/product/:id', auth, productController.deleteProduct);
router.get('/petshop/:id/products', auth, productController.getProducts);

module.exports = router;