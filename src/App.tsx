import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticlePage } from './pages/ArticlePage';
import WrongPage from './pages/WrongPage/WrongPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="*" element={<WrongPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
