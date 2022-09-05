import { ImageSourcePropType } from "react-native"

const pizzas: {
    name: string,
    price: string,
    image: ImageSourcePropType,
    description: string,
    amount: number
}[] = [{
    name: "Pepperoni",
    price: "$10",
    image: require("../assets/pizza-image/caprese.png"),
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aut, amet tenetur minus pariatur",
    amount: 1
},
{
    name: "Caprese",
    price: "$10",
    image: require("../assets/pizza-image/margherita.png"),
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aut, amet tenetur minus pariatur",
    amount: 1
},
{
    name: "Margherita",
    price: "$10",
    image: require("../assets/pizza-image/pepperoni.png"),
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aut, amet tenetur minus pariatur",
    amount: 1
}]

export default pizzas