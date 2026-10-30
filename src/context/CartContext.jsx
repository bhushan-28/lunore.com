import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('lunore_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [selectedSample, setSelectedSample] = useState("L'Or Absolu 2ml Sample");
  const [currency, setCurrency] = useState("USD");

  const currencyRates = {
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
    INR: { symbol: '₹', rate: 83.5 },
    JPY: { symbol: '¥', rate: 155 }
  };

  const formatPrice = (usdAmount) => {
    const curr = currencyRates[currency] || currencyRates.USD;
    const converted = Math.round(usdAmount * curr.rate);
    return `${curr.symbol}${converted.toLocaleString()}`;
  };

  useEffect(() => {
    try {
      localStorage.setItem('lunore_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (product, quantity = 1, engraving = "") => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id && item.engraving === engraving);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { ...product, quantity, engraving }];
      }
    });
    triggerToast(`Added ${product.name} to your luxury casket`);
  };

  const removeFromCart = (id, engraving = "") => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.engraving === engraving)));
  };

  const updateQuantity = (id, engraving = "", delta = 1) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === id && item.engraving === engraving) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 300;
  const shippingCost = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 25;
  const grandTotal = subtotal + shippingCost;

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        shippingCost,
        grandTotal,
        freeShippingThreshold,
        toastMessage,
        triggerToast,
        selectedSample,
        setSelectedSample,
        currency,
        setCurrency,
        formatPrice,
        currencySymbol: (currencyRates[currency] || currencyRates.USD).symbol
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
