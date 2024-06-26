import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Bio } from '../data/constatnts';
import { Link } from 'react-scroll'
import { Outlet, Link as RouterLink } from "react-router-dom";

export default function MyFooter() {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className='space-y-4 mb-8'>
                        <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={Bio?.logo}
                            alt="" className='w-10 inline-block items-center' /><span className='text-[#263238]
              '>{Bio.name}</span></a>

                        <div className='mb-1'>
                            <p>Copyright @ 2024 {Bio.name} ltd.</p>
                            <p>All rights reserved</p>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <RouterLink to="/about">About Us</RouterLink>
                                <RouterLink to="/contact">Contact Us</RouterLink>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Link className='cursor-pointer' to="service" spy={true} smooth={true} offset={-100} key={'service'}>Services</Link>
                                <Link className='cursor-pointer' to="request" spy={true} smooth={true} offset={-100} key={'request'}>Request Call</Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Home" />
                            <Footer.LinkGroup col>
                                <Link className='cursor-pointer' to="home" spy={true} smooth={true} offset={-100} key={'home'}>Home</Link>
                                <a href="">Reload</a>
                            </Footer.LinkGroup>
                        </div>
                        {/* <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div> */}
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="" year={2022} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        {/* <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} /> */}
                    </div>
                </div>
            </div>
        </Footer>
    )
}
