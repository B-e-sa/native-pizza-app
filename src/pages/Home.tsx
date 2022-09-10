import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const backgroundImage = require('../assets/pizza-background.jpg')
const phoneIcon = require('../assets/telephone.png')
const menuIcon = require('../assets/menu.png')
const pizzaLogo = require('../assets/pizza-logo.png')

const Home = ({ navigation }: any) => {
    return (
        < View style={styles.container} >
            <ImageBackground source={backgroundImage} resizeMode={'cover'} style={styles.backgroundImage}>

                {/* Header */}
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.touchable}>
                        <Image source={phoneIcon} style={styles.phoneIcon}></Image>
                    </TouchableOpacity>
                    <Image source={pizzaLogo} style={styles.pizzaLogo}></Image>
                    <TouchableOpacity>
                        <Image source={menuIcon} style={styles.menuIcon}></Image>
                    </TouchableOpacity>
                </View>

                {/* Middle text */}
                <View style={styles.textContainer}>
                    <Text style={{ color: 'white', fontSize: 50 }}>
                        LOREMIPSULUMDOLORSITAIIPSUL
                    </Text>
                    <Text style={{ color: 'white' }}>
                        Lorem ipsulo, dolor sit lorem ipsulum ipsulum ipsulum
                    </Text>
                </View>

                {/* Button */}
                <View style={{ display: "flex", alignItems: "center" }}>
                    <TouchableOpacity style={{ backgroundColor: 'black', alignItems: "center", width: 325 }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 40
                            }}
                            onPress={() => navigation.navigate("Products")}
                        >
                            SEE OPTIONS
                        </Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pizzaLogo: {
        width: 90,
        height: 95
    },
    textContainer: {
        display: "flex",
        alignItems: "center",
        width: 300,
        alignSelf: "center"
    },
    headerContainer: {
        alignItems: "center",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    phoneIcon: {
        width: 25,
        height: 25
    },
    menuIcon: {
        width: 50,
        height: 50
    },
    touchable: {
        justifyContent: "center",
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: 'yellow',
        width: 55,
        height: 55
    },
    backgroundImage: {
        flex: 1,
    }
})

export default Home