import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import UserLogin from './pages/UserLogin/UserLogin';
import Admin from './pages/Admin/Admin';
import AppointmentPage from './pages/Admin/pages/AppointmentPage/AppointmentPage';
import ClientPage from './pages/Admin/pages/ClientPage/ClientPage';
import AdminTest from './pages/AdminTest/AdminTest';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<UserLogin />} />
      {/* Admin */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/dashboard" element={<Admin />} />
      <Route path="/admin/appointments" element={<AppointmentPage />} />
      <Route path="/admin/clients" element={<ClientPage />} />
      <Route path="/adminTest" element={<AdminTest />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
}

export default App;
