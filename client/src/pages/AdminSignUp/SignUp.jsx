import React, { useState } from 'react';
import Navbar from '../../layout/NavBar/NavBar';
import Footer from '../../layout/Footer/Footer';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: parseInt(formData.phone) || 0
    };

    try {
      const res = await fetch('http://127.0.0.1:8080/api/admin/saveAdmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert('Account created successfully!');
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
        setFormData({ name: '', email: '', password: '', phone: '' });
      } else {
        alert('Failed to create account');
      }
    } catch (error) {
      console.error(error);
      alert('Error connecting to the server');
    }
  };

  return (
    <div>
      <Navbar />
      <main className="w-full flex justify-center py-10">
        <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Create a new account
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
              type="text"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              id="email"
              className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              id="password"
              className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              id="phone"
              className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
              type="text"
              pattern="\d{10}"
              maxLength="10"
              placeholder="Enter your Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white"
            >
              Sign up
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 underline">
              Login
            </a>
          </p>
          <button
            type="button"
            className="w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white"
          >
            <img
              className="h-4 w-4"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
              alt="appleLogo"
            />
            Sign up with Apple
          </button>
          <button
            type="button"
            className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
          >
            <img
              className="h-4 w-4"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
              alt="googleFavicon"
            />
            Sign Up with Google
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SignUp;
