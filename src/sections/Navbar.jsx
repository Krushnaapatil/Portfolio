import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul className="nav-ul flex gap-6">
      <li><Link className="nav-link" to="/">Home</Link></li>
      <li><Link className="nav-link" to="/about">About</Link></li>
      <li><Link className="nav-link" to="/projects">Projects</Link></li>
      <li><Link className="nav-link" to="/contact">Contact</Link></li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-20 backdrop-blur-lg bg-primary/40">
      <div className="mx-auto max-w-7xl flex items-center justify-between p-4">
        {/* Logo also navigates to full site */}
        <Link to="/" className="text-xl font-bold text-neutral-400 hover:text-white">
          Krushna
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-neutral-400 hover:text-white"
        >
          <img
            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
            alt="menu"
            className="h-6 w-6"
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden sm:flex">
          <Navigation />
        </nav>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <motion.nav
          className="sm:hidden text-center pb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Navigation />
        </motion.nav>
      )}
    </div>
  );
};

export default Navbar;
