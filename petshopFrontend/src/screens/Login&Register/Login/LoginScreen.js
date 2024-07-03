import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            const response = await axios.post('http://10.0.2.2:3000/login', { username, password });
            await AsyncStorage.setItem('token', response.data.token);
            console.log(response.data.token);

            // Navigate based on user type
            if (response.data.type === 1) {
                navigation.navigate('PetshopScreen');
            } else if (response.data.type === 0) {
                navigation.navigate('UserHomeScreen');
            } else {
                console.log(response.data.type)
                Alert.alert('Error', 'Invalid user type');
            }
        } catch (error) {
            Alert.alert('Error', 'Invalid username or password');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={login} />
            <Text style={styles.link} onPress={() => navigation.navigate('RegisterScreen')}>Don't you have an account?</Text>
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
    link: {
        marginTop: 15,
        color: 'blue',
    },
});

export default LoginScreen;