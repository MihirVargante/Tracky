import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Import Redux store
import { HashRouter } from 'react-router-dom'; // HashRouter for Chrome Extension
import './index.css';
import App from './App.jsx';

// Create root and render the app
createRoot(document.getElementById('root')).render(
  <Provider store={store}>  {/* Wrap App with Redux Provider */}
    <HashRouter> {/* Use HashRouter instead of BrowserRouter for extensions */}
      <App />
    </HashRouter>
  </Provider>
);
