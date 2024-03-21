import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import productImage from '../../../assets/petshop-1000x887.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const PetshopList = ({ route,products }) => {

    // const { petshopId } = route.params;

    // const deleteProduct = async (id) => {
    //     try {
    //         const token = await AsyncStorage.getItem('token');
    //         await axios.delete(`http://10.0.2.2:3000/petshop/${petshopId}/product/${id}`, {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         });
    //         onRefresh();
    //     } catch (error) {
    //         console.log(error);
    //         Alert.alert('Error', 'Failed to delete petshop');
    //     }
    // };

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
                            <TouchableOpacity style={styles.removeButton} onPress={() => deleteProduct(item._id)}>
                                <Text style={styles.removeButtonText}>Remove</Text>
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
    removeButton: {
        backgroundColor: '#ff0000',
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 30,
    },
    removeButtonText: {
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