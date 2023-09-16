"use client"
import React from 'react'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import classnames from 'classnames';
import './header.css'
import Image from 'next/image';
import Link from 'next/link';
import logoDark from "../../public/logo-black.svg"
import logoLight from "../../public/logo-white.svg"

const Header = () => {
    const router = useRouter();

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scroll = classnames({
        'scrolled': scrolled,
    });

    const isActive = (pathname) => {
        return router.pathname === pathname ? 'active' : '';
    };

    const logoImage = scrolled ? logoLight : logoDark;

    return (
        <header className={scroll}>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link href="/" className="navbar-brand">
                        <Image
                            src={logoImage}
                            alt="Dilip Logo"
                            width={45}
                            height={45}
                            priority="true"
                        />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-header" aria-controls="main-header" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main-header">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className={`nav-item ${isActive('/projects')}`}>
                                <Link href="/projects" className="nav-link">
                                    Projects
                                </Link>
                            </li>
                            <li className={`nav-item ${isActive('/about')}`}>
                                <Link href="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className={`nav-item ${isActive('/resume')}`}>
                                <Link href="/resume" className="nav-link">
                                    Resume
                                </Link>
                            </li>
                            <li className={`nav-item ${isActive('/contact')}`}>
                                <Link href="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
