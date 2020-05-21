import { Link } from 'gatsby';
import { NavLink } from './styled/type';
import { MenuItem, Menu, MenuButton } from './hamburgerMenu';
import React, { useEffect, useRef, useState } from 'react';
import { useBreakpoint } from '../context/breakpoint.tsx';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isFixed, setFixed] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        const fixed = ref.current && ref.current.offsetTop;
        setFixed(window.pageYOffset > fixed);
    };
    const breakpoint = useBreakpoint();

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
                        <NavLink
                            marginTop={breakpoint.mobile && 'md'}
                            marginBottom={breakpoint.mobile && 'md'}
                            marginAuto={breakpoint.mobile}
                            fontWeight="bold"
                            size="logo"
                            to="/"
                        >
                            Digital InnerPrize
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
                                    <NavLink to="/">
                                        <MenuItem delay={`${0.1}s`} open={menuOpen} onClick={() => setMenuOpen(false)}>
                                            Home
                                        </MenuItem>
                                    </NavLink>
                                    <NavLink to="/what-we-do">
                                        <MenuItem delay={`${0.1}s`} open={menuOpen} onClick={() => setMenuOpen(false)}>
                                            What We Do
                                        </MenuItem>
                                    </NavLink>
                                    <NavLink to="/work">
                                        <MenuItem delay={`${0.1}s`} open={menuOpen} onClick={() => setMenuOpen(false)}>
                                            Work
                                        </MenuItem>
                                    </NavLink>
                                    <NavLink to="/contact">
                                        <MenuItem delay={`${0.1}s`} open={menuOpen} onClick={() => setMenuOpen(false)}>
                                            Contact
                                        </MenuItem>
                                    </NavLink>
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
