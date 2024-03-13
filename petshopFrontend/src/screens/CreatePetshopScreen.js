import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CreatePetshopScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const createPetshop = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.post('http://10.0.2.2:3000/createpetshop', { name, address }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data);
            // Navigate back to the PetshopScreen 
            navigation.goBack();
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Failed to create petshop');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Petshop Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Petshop Address"
                value={address}
                onChangeText={(text) => setAddress(text)}
            />
            <Button title="Create Petshop" onPress={createPetshop} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
});

export default CreatePetshopScreen;