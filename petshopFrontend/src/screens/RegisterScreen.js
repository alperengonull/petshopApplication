import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try {
            await axios.post('http://10.0.2.2:3000/register', { username, email, password });
            Alert.alert('Success', 'User registered successfully');
            // Navigate to the login screen, or wherever you want to go after registration
            navigation.navigate('LoginScreen');
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'Failed to register user');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <Button title="Register" onPress={register} />
        </View>
    );
};

export default RegisterScreen;