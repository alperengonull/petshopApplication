import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Register from '../petshopFrontend/src/screens/Login&Register/Register/RegisterScreen';
import Login from './src/screens/Login&Register/Login/LoginScreen';
import PetshopScreen from './src/screens/Seller/PetshopScreen/PetshopScreen';
import ProductScreen from './src/screens/Seller/ProductScreen/ProductScreen';
import UserHomeScreen from './src/screens/Buyer/HomeScreen/UserHomeScreen';
import CreatePetshopScreen from './src/screens/Seller/CreatePetshop/CreatePetshopScreen';
import CreateProductScreen from './src/screens/Seller/CreateProduct/CreateProductScreen';
import UserProductScreen from './src/screens/Buyer/UserProductScreen/UserProductScreen';
import BasketScreen from './src/screens/Buyer/BasketScreen/BasketScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={Login}  />
        <Stack.Screen name="RegisterScreen" component={Register} />
        <Stack.Screen name="PetshopScreen" component={PetshopScreen} />
        <Stack.Screen name="UserHomeScreen" component={UserHomeScreen}/>
        <Stack.Screen name="BasketScreen" component={BasketScreen} />
        <Stack.Screen 
          name="UserProductScreen" 
          component={UserProductScreen}
          options={{
            headerRight: () => {
              const navigation = useNavigation(); // Get the navigation prop

              return (
                <TouchableOpacity onPress={() => navigation.navigate('BasketScreen')}>
                  <FontAwesome5 name="shopping-basket" size={25} color="#000" style={{ marginRight: 10 }} />
                </TouchableOpacity>
              );
            },
          }}
        />
        <Stack.Screen name="CreatePetshopScreen" component={CreatePetshopScreen} />
        <Stack.Screen name="CreateProductScreen" component={CreateProductScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;