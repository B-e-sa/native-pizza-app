import { ImageSourcePropType } from "react-native"

// because the require function, we can't use JSON 
// with dinamic links for the images, so we will 
// use an object
const pizzas: {
    name: string,
    price: number,
    image: ImageSourcePropType,
    description: string,
    amount: number
}[] = [{
    name: "Pepperoni",
    price: 10,
    image: require("../assets/pizza-image/caprese.png"),
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aut, amet tenetur minus pariatur",
    amount: 0
},
{
    name: "Caprese",
    price: 7,
    image: require("../assets/pizza-image/margherita.png"),
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aut, amet tenetur minus pariatur",
    amount: 0
},
{
    name: "Margherita",
    price: 9,
    image: require("../assets/pizza-image/pepperoni.png"),
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aut, amet tenetur minus pariatur",
    amount: 0
}]

export default pizzas