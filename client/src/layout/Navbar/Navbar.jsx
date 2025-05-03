import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      <div className="flex w-full items-center justify-between p-4 font-mono">
        <div className="text-2xl font-medium">
          <h1>Glamify</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links hidden md:block">
          <ul className="flex">
            <Link name="Home" />
            <Link name="About" />
            <Link name="Services" />
            <Link name="Contact" />
          </ul>
        </div>

        <div className="auth-buttons hidden md:flex">
          <LoginButton />
          <SignUpButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="rounded-md p-2 transition-colors hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          <FaBars className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Menu Overlay with Blur Effect */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/30 backdrop-blur-md md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-white transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-2xl font-medium">
              <h1>Glamify</h1>
            </div>
            <button
              onClick={toggleMenu}
              className="rounded-md p-2 transition-colors hover:bg-gray-100"
              aria-label="Close menu"
            >
              <FaTimes className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-col space-y-3 text-center">
              <MobileLink name="Home" />
              <MobileLink name="About" />
              <MobileLink name="Services" />
              <MobileLink name="Contact" />
            </ul>
          </nav>

          <div className="mt-auto flex flex-col space-y-3">
            <LoginButton fullWidth />
            <SignUpButton fullWidth />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

const LoginButton = ({ fullWidth = false }) => {
  return (
    <button
      className={`rounded-3xl border-2 border-black px-5 py-2 transition-colors duration-200 hover:border-black/80 hover:bg-amber-400 ${fullWidth ? 'w-full' : 'mx-2'} font-bold text-black hover:text-amber-50`}
    >
      Login
    </button>
  );
};

const SignUpButton = ({ fullWidth = false }) => {
  return (
    <button
      className={`rounded-3xl border-2 bg-black px-5 py-2 transition-colors duration-200 hover:bg-amber-100 ${fullWidth ? 'w-full' : 'mx-2'} font-bold text-white hover:text-black`}
    >
      Sign Up
    </button>
  );
};

const Link = ({ name = 'Link' }) => {
  return (
    <li className="bg-opacity-0 m-1 rounded-2xl border-2 border-transparent bg-gray-200/30 bg-clip-padding px-4 py-2 shadow-sm backdrop-blur-sm backdrop-filter transition-colors hover:border-2 hover:border-gray-200 hover:bg-gray-200/50">
      {name}
    </li>
  );
};

const MobileLink = ({ name = 'Link' }) => {
  return (
    <li className="bg-opacity-0 rounded-2xl bg-gray-200/30 bg-clip-padding px-4 py-3 backdrop-blur-sm backdrop-filter transition-colors hover:bg-gray-200/50">
      {name}
    </li>
  );
};
