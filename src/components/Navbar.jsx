import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from "react-icons/fa6";
import { Bio } from '../data/constatnts';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Outlet, Link as RouterLink } from "react-router-dom";

export default function Navbar({ home, type }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("000000000000000000000000000000000")
    }

    useEffect(() => {
        console.log("000000000000000000000", home);
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });

    const navItems = [
        { link: "Home", path: home ? 'home' : '/', router: true },
        { link: "Service", path: "service", type: 'home' },
        { link: "Request Call", path: "request", type: 'home' },

        { link: "About Us", path: home ? 'about' : '/about', router: true },
        { link: "Contact Us", path: home ? 'contact' : '/contact', router: true },
        // { link: "FAQ", path: "faq" },
    ];
    return (
        <>
            <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
                <nav className={`py-4 ls:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>

                    <div className='flex justify-between items-center text-base gap-8'>
                        <a href="/" className='text-2xl font-semibold flex items-center space-x-3'><img src={Bio.logo}
                            alt="" className='w-10 inline-block items-center' /><span className='text-[#263238]
                        '>{Bio.name}</span></a>

                        {/* nav items for large devices */}
                        <ul className='md:flex space-x-12 hidden'>
                            {
                                navItems.map(({ link, path, router }) => {
                                    if (home) {
                                        if (path === 'contact' || path == 'about')
                                            return (<RouterLink to={path} spy={true} smooth={true} offset={-100}
                                                key={path} className='block cursor-pointer text-base text-gray900 ☐ hover:text-brandPrimary
                      first:font-medium'>{link}</RouterLink>)
                                        else
                                            return (<Link to={path} spy={true} smooth={true} offset={-100}
                                                key={path} className='block cursor-pointer text-base text-gray900 ☐ hover:text-brandPrimary
                  first:font-medium'>{link}</Link>)
                                    } else {
                                        if (router)
                                            return (<RouterLink to={path} spy={true} smooth={true} offset={-100}
                                                key={path} className='block cursor-pointer text-base text-gray900 ☐ hover:text-brandPrimary
                  first:font-medium'>{link}</RouterLink>)
                                    }
                                }
                                )}
                        </ul>

                        {/* btn for large devices */}
                        {/* <div className='space-x-12 hidden lg:flex items-center '>
                        <a href="/" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</a>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300
                        rounded hover:bg-neutralDGrey'>Sign up</button>
                    </div> */}

                        {/* menu btn for only mobile devices */}
                        <div className='md:hidden'>
                            <button
                                onClick={toggleMenu}
                                className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                                {
                                    isMenuOpen ? (<FaXmark className='h-6 w-6 text-neutralDGrey' />) : (<FaBars
                                        className='h-6 w-6 text-neutralDGrey' />)
                                }
                            </button>
                        </div>
                    </div>

                    {/* nav items for mobile devices*/}
                    <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                        {
                            navItems.map(({ link, path, router }) => {
                                if (home) {
                                    if (path === 'contact' || path === 'about')
                                        return (<RouterLink onClick={() => toggleMenu()} to={path} spy={true} smooth={true} offset=
                                            {-100} key={path} className='block text-base text-white hover:text-brandPrimary
                                        first:font-medium'>{link}</RouterLink>)
                                    else
                                        return (<Link onClick={() => toggleMenu()} to={path} spy={true} smooth={true} offset=
                                            {-100} key={path} className='block text-base text-white hover:text-brandPrimary
                                        first:font-medium'>{link}</Link>)
                                } else {
                                    if (router)
                                        return (<RouterLink onClick={() => toggleMenu()} to={path} spy={true} smooth={true} offset=
                                            {-100} key={path} className='block text-base text-white hover:text-brandPrimary
                                        first:font-medium'>{link}</RouterLink>)
                                }
                            }
                            )}
                    </div>

                </nav>
            </header >

            <Outlet />
        </>
    )
}
