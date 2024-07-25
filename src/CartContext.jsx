import { useState, createContext } from "react";
import ProductData from "../public/product.json";
import PropTypes from "prop-types";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(ProductData);

    const increaseQuantity = (id) => {
        setCart(cart.map((item) => item.id === id && item.quantity < item.stock ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const decreaseQuantity = (id) => {
        setCart(cart.map((item) => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
    };

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity, totalQuantity, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { CartContext, CartProvider };