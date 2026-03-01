import React, { createContext, useContext, useReducer } from 'react';

// Initial state for the cart
const initialCartState = {
    items: [],
    totalAmount: 0,
};

// Create context
const CartContext = createContext();

// Reducer for managing cart state
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const updatedItems = [...state.items, action.item];
            const updatedTotalAmount = state.totalAmount + action.item.price;
            return { items: updatedItems, totalAmount: updatedTotalAmount };
        case 'REMOVE_ITEM':
            const filteredItems = state.items.filter(item => item.id !== action.id);
            const reducedTotalAmount = filteredItems.reduce((total, item) => total + item.price, 0);
            return { items: filteredItems, totalAmount: reducedTotalAmount };
        default:
            return state;
    }
};

// Provider component
export const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

    const addItem = (item) => {
        dispatch({ type: 'ADD_ITEM', item });
    };

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', id });
    };

    return (
        <CartContext.Provider value={{ cartState, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook for using cart context
export const useCart = () => {
    return useContext(CartContext);
};