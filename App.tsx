import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from "./src/pages/Home";
import Products from "./src/pages/Products";
import Cart from './src/pages/Cart';
import CartProvider from './src/contexts/CartContex';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={options} />
          <Stack.Screen name="Products" component={Products} options={options} />
          <Stack.Screen name="Cart" component={Cart} options={options} />
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer >
  )
};

const options = { headerShown: false }

export default App;