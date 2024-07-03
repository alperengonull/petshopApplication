import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import BuyerProductList from '../../../components/BuyerProductList';
import axios from 'axios';

const ProductScreen = ({ route }) => {
    const { petshopId } = route.params;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }
        , []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`http://10.0.2.2:3000/petshop/${petshopId}/products`);
            setProducts(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }



    return (
        <View style={styles.container}>
            <BuyerProductList products={products} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    button: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 30,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
});

export default ProductScreen;