import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import petshopImage from '../../../assets/petshop-1000x887.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const PetshopList = ({ petshops, onRefresh }) => {

    const navigation = useNavigation();

    const deletePetshop = async (id) => {
        try {
            const token = await AsyncStorage.getItem('token');
            await axios.delete(`http://10.0.2.2:3000/petshop/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            onRefresh();
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Failed to delete petshop');
        }
    };

    return (
        <FlatList
            data={petshops}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ProductScreen', { petshopId: item._id })}>
                    <View style={styles.petshop}>
                        <Image style={styles.image} source={petshopImage} />
                        <View style={styles.details}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.address}>{item.address}</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.removeButton} onPress={() => deletePetshop(item._id)}>
                                <Text style={styles.removeButtonText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    );

};

const styles = StyleSheet.create({
    petshop: {
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
    address: {
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