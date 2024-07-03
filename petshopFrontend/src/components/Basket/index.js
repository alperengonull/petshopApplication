import React from 'react';
import { View, Text, FlatList } from 'react-native';

const Basket = ({ basket }) => {
    return (
        <View>
            <Text>Basket</Text>
            <FlatList
                data={basket}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.price} TL</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Basket;