"use client";
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 const addToCart = (product) => {
  setCartItems((prevItems) => {
    // Check if the product already exists in the cart
    const existingItem = prevItems.find((item) => item.productname === product.productname);

    if (existingItem) {
      // If the product exists, increment its quantity
      return prevItems.map((item) =>
        item.productname === product.productname
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // If the product doesn't exist, add it with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });
};


  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
