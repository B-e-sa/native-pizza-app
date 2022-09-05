import Home from "./pages/Home";
import Products from "./pages/Products";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title: undefined}}/>
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  </NavigationContainer>
);


export default App;