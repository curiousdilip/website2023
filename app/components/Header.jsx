"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import logoDark from "../../public/logo-black.svg";
import logoLight from "../../public/logo-white.svg";
import "./header.css";

const Header = () => {
  const router = useRouter();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = classnames({
    scrolled: scrolled,
  });

  const isActive = (pathname) => {
    return router.pathname === pathname ? "active" : "";
  };

  const logoImage = scrolled ? logoLight : logoDark;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={scroll}>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${menuOpen ? "show" : ""
          }`}
      >
        <div className="container">
          <Link href="/" className="navbar-brand" onClick={closeMenu}>
            <Image
              src={logoImage}
              alt="Dilip Logo"
              width={45}
              height={45}
              priority="true"
            />
            <h1>Dilip Kumar</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-header"
            aria-controls="main-header"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="main-header"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className={`nav-item ${isActive("/projects")}`}>
                <Link href="/projects" className="nav-link" onClick={closeMenu}>
                  Projects
                </Link>
              </li>
              <li className={`nav-item ${isActive("/about")}`}>
                <Link href="/about" className="nav-link" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className={`nav-item ${isActive("/resume")}`}>
                <Link href="/resume" className="nav-link" onClick={closeMenu}>
                  Resume
                </Link>
              </li>
              <li className={`nav-item ${isActive("/contact")}`}>
                <Link href="/contact" className="nav-link" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
