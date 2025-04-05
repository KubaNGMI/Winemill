import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage if available
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
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
      
      if (existingItemIndex !== -1) {
        // If item already exists, increase quantity
        const existingItem = state.items[existingItemIndex];
        const quantityToAdd = newItem.quantity || 1;
        
        // Update existing item
        existingItem.quantity += quantityToAdd;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        // Ensure quantity and totalPrice are set properly
        const itemToAdd = {
          ...newItem,
          quantity: newItem.quantity || 1,
          totalPrice: newItem.price * (newItem.quantity || 1)
        };
        
        // Add new item to cart
        state.items.push(itemToAdd);
      }
      
      // Recalculate total amount
      state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
    },
    
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
    },
    
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.price * item.quantity;
        state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
        
        // Save to localStorage
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
        
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(state));
      } else if (item && item.quantity === 1) {
        // If quantity would be 0, remove the item
        state.items = state.items.filter(item => item.id !== id);
        state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
        
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;