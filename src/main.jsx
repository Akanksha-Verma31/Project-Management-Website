import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import {MaterialTailwindControllerProvider } from "./context/index.jsx" 

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <MaterialTailwindControllerProvider>
    <App />
    </MaterialTailwindControllerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
