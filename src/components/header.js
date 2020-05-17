import { Link } from 'gatsby';
import { NavLink } from './styled/type';
import { MenuItem, Menu, MenuButton } from './hamburgerMenu';
import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isFixed, setFixed] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        const fixed = ref.current && ref.current.offsetTop;
        setFixed(window.pageYOffset > fixed);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    return (
        <section style={{ paddingTop: isFixed && '145px' }}>
            <div className={isFixed ? 'fixed-nav' : 'navigation'} ref={ref}>
                <div className="container">
                    <div className="nav-container">
                        <NavLink size="h3" to="/">
                            <div className="logo-container">
                                <img src="../digital_innerprize_logo.png" alt="digital-innerprize-logo" />
                            </div>
                        </NavLink>
                        <div className="nav-right">
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <NavLink fontWeight="semi-bold" size="h3" to="/">
                                        home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink fontWeight="semi-bold" size="h3" to="/what-we-do">
                                        what we do
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink fontWeight="semi-bold" size="h3" to="/work">
                                        work
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink fontWeight="semi-bold" size="h3" to="/contact">
                                        contact
                                    </NavLink>
                                </li>
                            </ul>

                            <div className="mobile-nav">
                                <MenuButton
                                    handleOpen={menuOpen}
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    handleColor="#090C08"
                                />
                                <Menu handleOpen={menuOpen}>
                                    <Link to="/">
                                        <MenuItem delay={`${0.1}s`} open={menuOpen} onClick={() => setMenuOpen(false)}>
                                            Home
                                        </MenuItem>
                                    </Link>
                                    <Link to="/what-we-do">
                                        <MenuItem delay={`${0.1}s`} open={menuOpen} onClick={() => setMenuOpen(false)}>
                                            What We Do
                                        </MenuItem>
                                    </Link>
                                    <Link to="/work">
                                        <MenuItem delay={`${0.1}s`} open={menuOpen} onClick={() => setMenuOpen(false)}>
                                            Work
                                        </MenuItem>
                                    </Link>
                                    <Link to="/contact">
                                        <MenuItem delay={`${0.1}s`} open={menuOpen} onClick={() => setMenuOpen(false)}>
                                            Contact
                                        </MenuItem>
                                    </Link>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
