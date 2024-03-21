import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../petshopFrontend/src/screens/Login&Register/Register/RegisterScreen';
import Login from './src/screens/Login&Register/Login/LoginScreen';
import PetshopScreen from './src/screens/Seller/PetshopScreen/PetshopScreen';
import ProductScreen from './src/screens/Seller/ProductScreen/ProductScreen';
import PetshopUserScreen from './src/screens/PetshopUserScreen';
import CreatePetshopScreen from './src/screens/Seller/CreatePetshop/CreatePetshopScreen';
import CreateProductScreen from './src/screens/Seller/CreateProduct/CreateProductScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="RegisterScreen" component={Register} />
        <Stack.Screen name="PetshopScreen" component={PetshopScreen} />
        <Stack.Screen name="PetshopUserScreen" component={PetshopUserScreen} />
        <Stack.Screen name="CreatePetshopScreen" component={CreatePetshopScreen} />
        <Stack.Screen name="CreateProductScreen" component={CreateProductScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;