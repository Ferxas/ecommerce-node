import React from "react";
import { NavLink,  } from "react-router-dom";
import { GiShoppingBag } from 'react-icons/gi'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            🛒 Ecommerce
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/category"
                  className="nav-link"
                >
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Registrarse
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="/login"
                  className="nav-link dropdown-toggle"

                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ingresar
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/cart" className="dropdown-item" href="#">
                      Carrito (0)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="dropdown-item" href="#">
                      Ingresar a tu cuenta
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item" href="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link disabled">
                  Disabled
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
