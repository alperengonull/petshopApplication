import React, { useState, useEffect } from 'react';
import { View} from 'react-native';
import BuyerPetshopList from '../../../components/BuyerPetshopList';
import axios from 'axios';

const PetshopUserScreen = () => {
  const [petshops, setPetshops] = useState([]);

  useEffect(() => {
    fetchPetshops();
  }, []);

  const fetchPetshops = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/petshops');
      setPetshops(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <BuyerPetshopList petshops={petshops} />
    </View>
  );
};

export default PetshopUserScreen;