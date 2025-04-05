import React from 'react';

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center w-full m-2 font-monospace">
        <div className="text-2xl font-medium">
          <h1>Glamify</h1>
        </div>
        <div className="nav-links">
          <ul className="flex">
            <Link name="Home" />
            <Link name="About" />
            <Link name="Services" />
            <Link name="Contact" />
          </ul>
        </div>
        <div className="auth-buttons">
          <LoginButton />
          <SignUpButton />
        </div>
      </div>
    </>
  );
}

export default Navbar;

const LoginButton = () => {
  return (
    <>
      <button className="border-2 border-amber-400 py-2 px-5 rounded-3xl hover:bg-amber-400 hover:border-transparent transition-colors duration-200 mx-2 text-amber-400 hover:text-amber-50 font-bold">
        Login
      </button>
    </>
  );
};

const SignUpButton = () => {
  return (
    <>
      <button className="bg-black border-2 py-2 px-5 rounded-3xl hover:bg-amber-100 transition-colors duration-200 mx-2 text-white gray-900 hover:text-black font-bold">
        Sign Up
      </button>
    </>
  );
};

const Link = ({ name = 'Link' }) => {
  return (
    <li className="m-1 border-2 border-transparent px-4 py-2 rounded-2xl bg-gray-200/30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 shadow-sm hover:bg-gray-200/50 hover:border-2 hover:border-gray-200 transition-colors">
      {name}
    </li>
  );
};
