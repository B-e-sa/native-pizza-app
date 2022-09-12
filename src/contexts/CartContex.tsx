import { useState, createContext } from 'react'

export const CartContext = createContext({})

const CartProvider = ({ children }: any) => {
    const [cartContext, setCartContext] = useState([])

    return (
        <CartContext.Provider value={{ cartContext, setCartContext }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

