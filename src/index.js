import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Resources from './Resources';
import Calculator from './Calculator';
import FAQ from './FAQ';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);