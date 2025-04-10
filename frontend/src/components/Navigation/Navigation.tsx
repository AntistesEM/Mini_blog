import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '#', label: 'О нас' },
    { path: '/signin', label: 'Вход' },
    { path: '/signup', label: 'Регистрация' },
  ];

  const aboutSubLinks = [
    { path: '/about', label: 'О компании' },
    { path: '/team', label: 'Наша команда' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <nav
      className={`${styles['navbar']} navbar navbar-expand-lg navbar-light bg-light`}
    >
      <div className="container-fluid">
        <Link className={`${styles['navbar-brand']} navbar-brand`} to="/">
          Логотип
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navLinks.map((link) => {
              if (link.path === currentPath) return null;

              if (link.path === '#') {
                return (
                  <li
                    className={`${styles['nav-item']} nav-item dropdown`}
                    key={link.label}
                  >
                    <Link
                      className={`${styles['nav-link']} nav-link dropdown-toggle`}
                      to="#"
                      id="aboutDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      О нас
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="aboutDropdown"
                    >
                      {aboutSubLinks.map((subLink) => (
                        <li key={subLink.path}>
                          <Link className="dropdown-item" to={subLink.path}>
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li
                  className={`${styles['nav-item']} nav-item`}
                  key={link.path}
                >
                  <Link
                    className={`${styles['nav-link']} nav-link`}
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
