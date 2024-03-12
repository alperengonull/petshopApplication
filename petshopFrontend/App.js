import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/screens/RegisterScreen';
import Login from './src/screens/LoginScreen';
import Petshops from './src/screens/PetshopScreen';
import PetshopUserScreen from './src/screens/PetshopUserScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="RegisterScreen" component={Register} />
        <Stack.Screen name="PetshopsScreen" component={Petshops} />
        <Stack.Screen name="PetshopUserScreen" component={PetshopUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;