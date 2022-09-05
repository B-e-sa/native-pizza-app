import { useState } from 'react'
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
import { LinearGradient } from 'expo-linear-gradient'

const Products = () => {

    const [cart, setCart] = useState<string[]>([])

    const renderPizzas = pizzas.map<JSX.Element>((pizza) =>
        <View
            key={pizza.name}
            style={styles.pizzaContainer}
        >
            <Image source={pizza.image} style={styles.pizzaImage}></Image>
            <Text style={{ alignSelf: 'flex-start', fontSize: 22 }}>{pizza.name}</Text>
            <Text>{pizza.description}</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <LinearGradient
                        colors={['#ffe5ae', '#ffc342']}
                    >
                        <TouchableOpacity style={styles.button} onPress={() => {
                            pizza.amount--
                        }} >
                            <Text > - </Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <TextInput style={styles.quantityContainer}> {pizza.amount} </TextInput>

                    <LinearGradient colors={['#ffe5ae', '#ffc342']}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            pizza.amount++
                            setCart([...cart, pizza.name])
                        }}>
                            <Text> + </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={{ alignSelf: "center" }}>
                    <Text>{pizza.price}</Text>
                </View>
            </View>
        </View >
    )

    return (
        <ScrollView>
            <View style={styles.container}>
                {renderPizzas}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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