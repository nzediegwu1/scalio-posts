import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Home, PostDetails } from './components';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
