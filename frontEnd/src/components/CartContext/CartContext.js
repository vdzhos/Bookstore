import React, {useState, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [booksInCart, setBooksInCart] = useState([]);
    return (
        <CartContext.Provider value={[booksInCart, setBooksInCart]}>
            {props.children}
        </CartContext.Provider>
    );
}