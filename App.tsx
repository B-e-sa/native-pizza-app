import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./src/pages/Home";
import Products from "./src/pages/Products";

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={options} />
        <Stack.Screen name="Products" component={Products} options={options} />
      </Stack.Navigator>
    </NavigationContainer >
  )
};

const options = { headerShown: false }

export default App;