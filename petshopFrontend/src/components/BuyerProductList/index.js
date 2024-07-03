import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import productImage from '../../../assets/petshop-1000x887.jpg';

const PetshopList = ({ products }) => {

    const [basket, setBasket] = useState([]);

    const addToBasket = (product) => {
        setBasket(basket => [...basket, product]);
    }

    // Added useEffect to see the basket in console
    useEffect(() => {
        console.log(basket);
    }, [basket]);

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <View style={styles.products}>
                    <Image style={styles.image} source={productImage} />
                    <View style={styles.details}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price} TL</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => addToBasket(item)}>
                            <Text style={styles.buttonText}>Basket</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
    );

};

const styles = StyleSheet.create({
    products: {
        flexDirection: 'row',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    details: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        color: '#888',
    },
    button: {
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 30,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
});

export default PetshopList;