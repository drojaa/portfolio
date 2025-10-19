import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FullPortfolio } from './pages/FullPortfolio/FullPortfolio.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/full-portfolio" element={<FullPortfolio />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
