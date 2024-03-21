import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PetshopList from '../../../components/SellerPetshopList';
import { useIsFocused } from '@react-navigation/native';

const PetshopScreen = ({ navigation }) => {
  const [petshops, setPetshops] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchPetshops();
    }
  }, [isFocused]);

  const fetchPetshops = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.get('http://10.0.2.2:3000/petshops', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setPetshops(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to fetch petshops');
    }
  };

  return (
    <View style={styles.container}>
      <PetshopList petshops={petshops} onRefresh={fetchPetshops} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreatePetshopScreen')}>
        <Text style={styles.buttonText}>Create Petshop</Text>
      </TouchableOpacity>
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

export default PetshopScreen;