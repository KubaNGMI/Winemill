import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../src/redux/feature/cart/cart';
import App from './App';
import '../src/Global/style.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>

      <App />

  </Provider>
);