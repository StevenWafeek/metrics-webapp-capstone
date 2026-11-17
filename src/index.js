import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import './global.css';
import App from './App';
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
