import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // Importing the main App component
import './index.css';  // Your global styles or Tailwind CSS
import { Provider } from 'react-redux';  // Importing the Provider component to supply Redux store
import { store } from './app/store';  // Import the configured Redux store

// Rendering the App component with Redux store wrapped around it
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>  {/* Make the store accessible to the entire app */}
    <App />
  </Provider>
);
