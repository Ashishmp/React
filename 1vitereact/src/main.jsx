import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Test from './Test.jsx'; // Corrected import to match the component name

createRoot(document.getElementById('root')).render(
     // <App />
     <Test />  // Corrected to render the "Test" component
);
