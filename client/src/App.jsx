import React from 'react';
import Home from './pages/Home/Home';
import Admin from './pages/Admin2/Admin';
import NotFound from './pages/NotFound/NotFound';
import AdminTest from './pages/Admin/AdminTest';
import { Route, Routes } from 'react-router-dom';
import AppointmentPage from './pages/Admin2/pages/AppointmentPage/AppointmentPage';
import ClientPage from './pages/Admin2/pages/ClientPage/ClientPage';
import UserLogin from './pages/UserLogin/UserLogin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
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
