import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import petshopImage from '../../../assets/petshop-1000x887.jpg';
import { useNavigation } from '@react-navigation/native';

const PetshopList = ({ petshops }) => {

    const navigation = useNavigation();

    return (
        <FlatList
            data={petshops}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('UserProductScreen',{ petshopId: item._id })}>
                    <View style={styles.petshop}>
                        <Image style={styles.image} source={petshopImage} />
                        <View style={styles.details}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.address}>{item.address}</Text>
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
});

export default PetshopList;