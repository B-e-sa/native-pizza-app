import { ImageSourcePropType } from "react-native"

// because the require function, we can't use JSON 
// with dinamic links for the images, so we will 
// use an object
const pizzas: {
    name: string,
    price: number,
    image: string,
    description: string,
    amount: number
}[] = [{
    name: "Pepperoni",
    price: 10,
    image: 'https://positano.lv/wp-content/uploads/2022/01/Diavola-2.png',
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aut, amet tenetur minus pariatur",
    amount: 0
},
{
    name: "Caprese",
    price: 7,
    image: 'https://positano.lv/wp-content/uploads/2021/12/Caprese-2.png',
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aut, amet tenetur minus pariatur",
    amount: 0
},
{
    name: "Margherita",
    price: 9,
    image: 'https://positano.lv/wp-content/uploads/2021/12/Margherita-2-1.png',
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aut, amet tenetur minus pariatur",
    amount: 0
}]

export default pizzas