import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Resources from './Resources';
import Calculator from './Calculator';
import Tutorial from './Tutorial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Tutorial" element={<Tutorial />} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);