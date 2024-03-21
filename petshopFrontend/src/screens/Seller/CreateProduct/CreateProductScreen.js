import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateProductScreen = ({ route, navigation }) => {

    const { petshopId } = route.params;
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const createProduct = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            await axios.post(
                `http://10.0.2.2:3000/petshop/${petshopId}/product`,
                { name, price},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            navigation.goBack();
        } catch (error) {
            console.log(error);
            // Show an error message here
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Product Name:</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />

            <Text style={styles.label}>Price:</Text>
            <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" />

            <Button title="Create Product" onPress={createProduct} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 10,
    },
});

export default CreateProductScreen;