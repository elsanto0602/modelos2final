import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="navbar">
      <ul className="ulNavbar">
        <li>
          <Link to="/">
            <button>
              Inicio
            </button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button>
              Iniciar Sesión
            </button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button>
              Registrarse
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
