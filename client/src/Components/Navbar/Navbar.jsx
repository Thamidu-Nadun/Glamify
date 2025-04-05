import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden"
  }

  return (
    <>
      <div className="flex justify-between items-center w-full p-4 font-mono">
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
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <FaBars className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Menu Overlay with Blur Effect */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-md z-40 md:hidden" onClick={toggleMenu}></div>
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="text-2xl font-medium">
              <h1>Glamify</h1>
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <FaTimes className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col flex-1">
            <ul className="flex flex-col space-y-3 text-center">
              <MobileLink name="Home" />
              <MobileLink name="About" />
              <MobileLink name="Services" />
              <MobileLink name="Contact" />
            </ul>
          </nav>

          <div className="flex flex-col space-y-3 mt-auto">
            <LoginButton fullWidth />
            <SignUpButton fullWidth />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

const LoginButton = ({ fullWidth = false }) => {
  return (
    <button
      className={`border-2 border-amber-400 py-2 px-5 rounded-3xl hover:bg-amber-400 hover:border-transparent transition-colors duration-200 ${fullWidth ? "w-full" : "mx-2"} text-amber-400 hover:text-amber-50 font-bold`}
    >
      Login
    </button>
  )
}

const SignUpButton = ({ fullWidth = false }) => {
  return (
    <button
      className={`bg-black border-2 py-2 px-5 rounded-3xl hover:bg-amber-100 transition-colors duration-200 ${fullWidth ? "w-full" : "mx-2"} text-white hover:text-black font-bold`}
    >
      Sign Up
    </button>
  )
}

const Link = ({ name = "Link" }) => {
  return (
    <li className="m-1 border-2 border-transparent px-4 py-2 rounded-2xl bg-gray-200/30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 shadow-sm hover:bg-gray-200/50 hover:border-2 hover:border-gray-200 transition-colors">
      {name}
    </li>
  )
}

const MobileLink = ({ name = "Link" }) => {
  return (
    <li className="px-4 py-3 rounded-2xl bg-gray-200/30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 hover:bg-gray-200/50 transition-colors">
      {name}
    </li>
  )
}

