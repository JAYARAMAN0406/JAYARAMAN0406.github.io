import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './index.css';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    React.createElement(React.StrictMode, null, 
      React.createElement(App)
    )
  );
}