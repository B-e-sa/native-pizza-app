import React, { useEffect, useState, useContext } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native'
import pizzas from '../pizzas/pizzas'
import { CartContext } from '../contexts/CartContex'

const leftArrowIcon = require('../assets/left-arrow.png')
const cartIcon = require('../assets/cart.png')

const Products = ({ navigation }: any) => {

    const { cartContext, setCartContext }: any = useContext(CartContext)

    // useEffect wasn't triggering with other states, so that will 
    // fix it. 
    const [quantity, setQuantity] = useState(0)

    useEffect(() => { }, [quantity])

    const renderPizzas = pizzas.map<JSX.Element>((pizza) =>
        <View
            key={pizza.name}
            style={styles.pizzaContainer}
        >
            <Image source={{ uri: pizza.image }} style={styles.pizzaImage}></Image>
            <Text style={{ alignSelf: 'flex-start', fontSize: 22 }}>{pizza.name}</Text>
            <Text>{pizza.description}</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <LinearGradient colors={['#ffe5ae', '#ffc342']}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            // if the cart isn't empty
                            if (cartContext[0] !== undefined) {

                                if (pizza.amount > 1) {
                                    // subtract one pizza
                                    pizza.amount--
                                    // find the pizza index, then the amount index
                                    // and subtract 1
                                    cartContext[cartContext.indexOf(pizza.name) + 1]--

                                    // if theres no pizza and to not remove an aleatory pizza,
                                    // check pizza index
                                } else if (cartContext.indexOf(pizza.name) !== -1) {
                                    // remove one more pizza to the amount be 0
                                    pizza.amount--
                                    // remove every desired pizza and their keys from the cart
                                    cartContext.splice(cartContext.indexOf(pizza.name), 4)
                                }

                            }

                            if (quantity > 0) {
                                setQuantity(quantity - 1)
                            }
                        }}>
                            <Text > - </Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <TextInput style={styles.quantityContainer}> {pizza.amount} </TextInput>

                    <LinearGradient colors={['#ffe5ae', '#ffc342']}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            pizza.amount++
                            // if cart isn't empty
                            if (cartContext[0] !== undefined) {

                                // search the pizza index, if it exists on the cart
                                // add +1 to the amount key
                                if (cartContext.indexOf(pizza.name) !== -1) {
                                    cartContext[cartContext.indexOf(pizza.name) + 1]++

                                    // if it don't exist, add the pizza    
                                } else {
                                    setCartContext([...cartContext, pizza.name, pizza.amount, pizza.price, pizza.image])
                                }

                                // just add the pizza
                            } else {
                                setCartContext([...cartContext, pizza.name, pizza.amount, pizza.price, pizza.image])
                            }
                            setQuantity(quantity + 1)
                        }}>
                            <Text> + </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={{ alignSelf: "center" }}>
                    <Text>${pizza.price}</Text>
                </View>
            </View>
        </View >
    )

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.cartContainer}>

                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image
                            source={leftArrowIcon}
                            style={styles.leftArrowIcon}
                        ></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                        <View>
                            <Text style={{
                                textAlign: 'center',
                                color: 'white',
                                borderRadius: 100,
                                width: 24,
                                position: 'absolute',
                                left: 20,
                                backgroundColor: 'red',
                                zIndex: 1
                            }}>
                                {quantity}
                            </Text>
                            <Image source={cartIcon} style={styles.cartIcon}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
                {renderPizzas}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    leftArrowIcon: {
        width: 30,
        height: 35
    },
    cartContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 360,
        marginVertical: 30
    },
    cartIcon: {
        width: 40,
        height: 45
    },
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center"
    },
    pizzaContainer: {
        display: "flex",
        alignItems: "center",
        borderColor: "#DEDEDE",
        borderWidth: 2,
        width: 300,
        padding: 10
    },
    quantityContainer: {
        borderColor: '#DEDEDE',
        borderWidth: 2,
        textAlign: "center",
        width: 50
    },
    pizzaImage: {
        width: 290,
        height: 290
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        width: 45,
        height: 45
    }
})

export default Products