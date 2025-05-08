import React from 'react';
import FormImage from './Components/FormImage/FormImage';
import LoginForm from './Components/LoginForm/LoginFrom';
import Navbar from '../../layout/NavBar/NavBar';
import Footer from '../../layout/Footer/Footer';

function UserLogin () {
  return (
    <div>
      <Navbar />
      <div className="flex h-[700px] w-full py-10">
        <FormImage />
        <div className="w-full flex flex-col items-center justify-center">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserLogin;
