import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Switch, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSeller, setIsSeller] = useState(false); // false for buyer, true for seller

    const register = async () => {
        try {
            await axios.post('http://10.0.2.2:3000/register', { username, email, password, type: isSeller ? 1 : 0 });
            Alert.alert('Success', 'User registered successfully');
            // Navigate to the login screen, or wherever you want to go after registration
            navigation.navigate('LoginScreen');
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'Failed to register user');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Register as Seller</Text>
                <Switch
                    value={isSeller}
                    onValueChange={(value) => setIsSeller(value)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Register" onPress={register} />
            </View>
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
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    switchText: {
        marginRight: 10,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default RegisterScreen;
