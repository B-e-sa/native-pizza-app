import { useEffect, useContext } from 'react'
import { CartContext } from '../contexts/CartContex'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'


let separatedCartItems: [][] = []

const Cart = () => {

    const { cartContext, setCartContext }: any = useContext(CartContext)

    useEffect(() => {
        console.log(separatedCartItems)
    }, [])

    /*
    // The original cart array has every item in the same index,
    // this loop will separate them into a new array.
    // Every four itens (image, quantity, price and name)
    // will be pushed to the separetedCartItems
    */
    for (let c = 0; c < cartContext.length; c += 4) {
        separatedCartItems.push(
            cartContext.slice(0 + c, 4 + c)
        )
    }

    return (
        <ScrollView>
            <View>
                {
                    separatedCartItems.map((pizza: any): JSX.Element => {
                        return (
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderColor: '#DEDEDE',
                                marginTop: 35,
                                padding: 15
                            }}>
                                <Image style={styles.pizzaImage} source={{ uri: pizza[3] }}></Image>

                                <View style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around'
                                }}>

                                    <Text> ${pizza[2] * pizza[1]} </Text>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}>
                                        <TouchableOpacity onPress={() => {
                                            cartContext[1]--
                                        }}>
                                            <Text> - </Text>
                                        </TouchableOpacity>

                                        <Text> {pizza[1]} </Text>

                                        <TouchableOpacity onPress={() => {
                                            cartContext[1]++
                                        }}>
                                            <Text> + </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
                <Text> TOTAL PRICE </Text>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    pizzaImage: {
        width: 150,
        height: 150,
    }
})

export default Cart