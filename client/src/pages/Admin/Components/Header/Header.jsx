import React from 'react';
import { Bell, Search } from 'lucide-react';

function Header() {
  return (
    <div>
      <header className="flex h-16 w-full items-center justify-between bg-white p-2 px-4 shadow-sm">
        <div className="w-100 flex items-center rounded-2xl border border-gray-600 py-2 pl-4">
          <Search size={20} className="mr-3 text-gray-600" />
          <input
            type="text"
            className="w-full font-mono text-lg text-pink-500 outline-none placeholder:text-gray-800/80"
            placeholder="What you are you looking for?"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative rounded-full p-2 hover:bg-gray-100">
            <Bell size={22} />
            <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
          </button>
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 font-semibold text-white">
              JD
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium">Jane Doe</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
