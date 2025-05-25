import React, { useState } from 'react';
import Navbar from '../../layout/NavBar/NavBar';
import Footer from '../../layout/Footer/Footer';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: parseInt(formData.phone) || 0,
    };

    try {
      const res = await fetch('http://127.0.0.1:8080/api/admin/saveAdmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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
      <main className="flex w-full justify-center py-10">
        <div className="mx-4 max-w-96 rounded-xl bg-white p-4 text-left text-sm text-gray-500 shadow-[0px_0px_10px_0px] shadow-black/10 md:p-6">
          <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
            Create a new account
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              className="my-3 w-full rounded-full border border-gray-500/30 bg-transparent px-4 py-2.5 outline-none"
              type="text"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              id="email"
              className="my-3 w-full rounded-full border border-gray-500/30 bg-transparent px-4 py-2.5 outline-none"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              id="password"
              className="mt-1 w-full rounded-full border border-gray-500/30 bg-transparent px-4 py-2.5 outline-none"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              id="phone"
              className="my-3 w-full rounded-full border border-gray-500/30 bg-transparent px-4 py-2.5 outline-none"
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
              className="mb-3 w-full rounded-full bg-indigo-500 py-2.5 text-white"
            >
              Sign up
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 underline">
              Login
            </a>
          </p>
          <button
            type="button"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-black py-2.5 text-white"
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
            className="my-3 flex w-full items-center justify-center gap-2 rounded-full border border-gray-500/30 bg-white py-2.5 text-gray-800"
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
