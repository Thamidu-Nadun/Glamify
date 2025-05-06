import React from 'react';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Admin from './pages/Admin/Admin';
import { Route, Routes } from 'react-router-dom';
import Admin2 from './pages/Admin2/Admin2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin2" element={<Admin2 />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
}

export default App;
