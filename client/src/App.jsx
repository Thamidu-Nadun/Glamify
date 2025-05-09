import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import UserLogin from './pages/UserLogin/UserLogin';
import Admin from './pages/Admin/Admin';
import AppointmentPage from './pages/Admin/pages/AppointmentPage/AppointmentPage';
import ClientPage from './pages/Admin/pages/ClientPage/ClientPage';
import AdminTest from './pages/AdminTest/AdminTest';
import EditAppointmentPage from './pages/Admin/pages/AppointmentPage/EditAppointmentPage';
import ServicePage from './pages/Admin/pages/ServicePage/ServicePage';
import EditServicePage from './pages/Admin/pages/ServicePage/EditServicePage';
import DeletePopUp from './Components/DeletePopUp/DeletePopUp';
import EditClientPage from './pages/Admin/pages/ClientPage/EditClientPage';
import EmployeePage from './pages/Admin/pages/EmployeePage/EmployeePage';
import EditEmployeePage from './pages/Admin/pages/EmployeePage/EditEmployeePage';
import FeedbackPage from './pages/Admin/pages/FeedbackPage/FeedbackPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      {/* Admin */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/dashboard" element={<Admin />} />
      
      {/* Appointments */}
      <Route path="/admin/appointments" element={<AppointmentPage />} />
      <Route
        path="/admin/appointments/edit"
        element={<EditAppointmentPage />}
      />
      
      {/* Service */}
      <Route path="/admin/services" element={<ServicePage />} />
      <Route
        path="/admin/services/edit"
        element={<EditServicePage />}
      />

      {/* Client */}
      <Route path="/admin/clients" element={<ClientPage />} />
      <Route
        path="/admin/clients/edit"
        element={<EditClientPage />}
      />

      {/* Employee */}
      <Route path="/admin/employees" element={<EmployeePage />} />
      <Route
        path="/admin/employees/edit"
        element={<EditEmployeePage />}
      />

      {/* Feedback */}
      <Route path="/admin/feedbacks" element={<FeedbackPage />} />
      <Route
        path="/admin/feedbacks/edit"
        element={<EditEmployeePage />}
      />
      <Route path="/adminTest" element={<AdminTest />} />
      <Route path="/pop" element={<DeletePopUp />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
}

export default App;
