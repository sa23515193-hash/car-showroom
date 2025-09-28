import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-red-400">🚘</span>
          <span>Car Showroom</span>
        </Link>

        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? "text-red-400" : "hover:text-red-400"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/cars" className={({isActive}) => isActive ? "text-red-400" : "hover:text-red-400"}>Cars</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => isActive ? "text-red-400" : "hover:text-red-400"}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-red-400" : "hover:text-red-400"}>Contact</NavLink>
          </li>
          <li>
          <NavLink to="/admin" className={({isActive}) => isActive ? "text-red-400" : "hover:text-red-400"}>Admin</NavLink>
          </li>
        </ul>

        <div className="md:hidden">
          {/* Simple mobile nav fallback */}
          <Link to="/cars" className="bg-red-600 px-3 py-1 rounded">Browse Cars</Link>
        

        </div>
      </div>
    </nav>
  );
};

export default Navbar;