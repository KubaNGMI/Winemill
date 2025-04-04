
import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
  }
  
  return {
    items: [],
    totalAmount: 0,
    deliveryFee: 100
  };
};

const initialState = loadCartFromStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price
        });
      }
      
      state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      
      localStorage.setItem('cart', JSON.stringify(state));
    },
    
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      
      localStorage.setItem('cart', JSON.stringify(state));
    },
    
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.price * item.quantity;
        state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
        
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.price * item.quantity;
        state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
        
        localStorage.setItem('cart', JSON.stringify(state));
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
        state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
        
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;