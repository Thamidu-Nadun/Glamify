import React, { useState } from 'react';
import Cookies from 'js-cookie';

function From() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const loginRes = await fetch(
        `http://127.0.0.1:8080/api/customers/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
      );
      const loginData = await loginRes.json();

      if (loginData.code === 200 && loginData.content === true) {
        Cookies.set('isLoggedIn', 'true', { expires: 1 });

        const userRes = await fetch(
          `http://127.0.0.1:8080/api/customers/getCustomerByEmail?email=${encodeURIComponent(email)}`,
        );
        const userData = await userRes.json();

        if (userData.code === 200 && userData.content) {
          const { password, ...safeUserData } = userData.content;
          Cookies.set('userData', JSON.stringify(safeUserData), { expires: 1 });

          alert('Login successful!');
          setTimeout(() => {
            window.location.href = '/';
          }, 2000);
        } else {
          alert('Failed to fetch user data.');
        }
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="rounded-2xl border-2 border-pink-500 p-4">
      <form
        className="flex w-80 flex-col items-center justify-center md:w-96"
        onSubmit={handleLogin}
      >
        <h2 className="text-4xl font-medium text-gray-900">Sign in</h2>
        <p className="mt-3 text-sm text-gray-500/90">
          Welcome back! Please sign in to continue
        </p>

        <button
          type="button"
          className="mt-8 flex h-12 w-full items-center justify-center rounded-full bg-gray-500/10"
        >
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
            alt="googleLogo"
          />
        </button>

        <div className="my-5 flex w-full items-center gap-4">
          <div className="h-px w-full bg-gray-300/90" />
          <p className="w-full text-nowrap text-sm text-gray-500/90">
            or sign in with email
          </p>
          <div className="h-px w-full bg-gray-300/90" />
        </div>

        <div className="flex h-12 w-full items-center gap-2 overflow-hidden rounded-full border border-gray-300/60 bg-transparent pl-6">
          <svg
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
              fill="#6B7280"
            />
          </svg>
          <input
            type="email"
            placeholder="Email id"
            className="h-full w-full bg-transparent text-sm text-gray-500/80 placeholder-gray-500/80 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mt-6 flex h-12 w-full items-center gap-2 overflow-hidden rounded-full border border-gray-300/60 bg-transparent pl-6">
          <svg
            width="13"
            height="17"
            viewBox="0 0 13 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
              fill="#6B7280"
            />
          </svg>
          <input
            type="password"
            placeholder="Password"
            className="h-full w-full bg-transparent text-sm text-gray-500/80 placeholder-gray-500/80 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mt-8 flex w-full items-center justify-between text-gray-500/80">
          <div className="flex items-center gap-2">
            <input className="h-5" type="checkbox" id="checkbox" />
            <label className="text-sm" htmlFor="checkbox">
              Remember me
            </label>
          </div>
          <a className="text-sm underline" href="#">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="mt-8 h-11 w-full rounded-full bg-indigo-500 text-white transition-opacity hover:opacity-90"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-gray-500/90">
          Don’t have an account?{' '}
          <a className="text-indigo-400 hover:underline" href="#">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default From;
