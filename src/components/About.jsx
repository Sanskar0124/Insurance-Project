import React, { useEffect, useState } from 'react'
import { Bio, AboutUs } from '../data/constatnts'
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import MyFooter from './MyFooter';
import { helix } from 'ldrs'

export default function About() {
    const [isLoading, setIsLoading] = useState(false);
    helix.register()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Set timeout to 1 second (1000 milliseconds)

        return () => clearTimeout(timeout); // Clean up the timeout on component unmount
    }, []);

    function ScrollToTopOnPageChange() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }
    return (
        <>
            {isLoading ?
                (
                    <div className='flex justify-center items-center loader-body'>
                        <l-helix
                            size="100"
                            speed="2.5"
                            color="#4CAF4F"
                        ></l-helix>
                    </div>
                )
                :
                (
                    <div id='about'>
                        <Navbar home={false} page={'about'} />
                        <div className='mt-12 '>
                            {/* about text */}
                            <div className='px-4 1g:px-14 max-w-screen-2xl mx-auto mb-10'>
                                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                                    <div>
                                        <img src={AboutUs.image} alt="" width={400} />
                                    </div>
                                    <div className='md:w-3/5 mx-auto'>
                                        <h2 className='text-4xl  text-neutralDGrey font-semibold mb-4 md:w-4/5'>{AboutUs.title}</h2>
                                        <p className='md:w-3/4 text-sm ☐ text-neutralGrey mb-8'>{AboutUs.content}</p>
                                        {/* <button className='btn-primary'>Learn More</button> */}
                                    </div>
                                </div>
                            </div>

                            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-6'>
                                {/* <div className='flex justify-center mb-5'>
                    <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={Bio.logo}
                        alt="" className='w-10 inline-block items-center' /><span className='text-[#263238]
              '>{Bio.name}</span></a>
                </div> */}

                                <div className='flex flex-col lg:flex-row justify-between items-center'>
                                    <div>
                                        <h2 className='text-2xl flex items-center text-brandPrimary font-semibold mb-4'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480"></path></svg>
                                            <span className='text-neutralDGrey hover:text-brandPrimary cursor-pointer text-1xl px-2'>+91 9137479331</span></h2>
                                        <h2 className='text-2xl flex items-center text-brandPrimary font-semibold mb-4'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"></path></svg>
                                            <span className='text-neutralDGrey hover:text-brandPrimary cursor-pointer text-1xl px-2'>sansakhraliya@gmail.com</span></h2>
                                    </div>
                                    <div>
                                        <h2 className='text-2xl flex  text-brandPrimary font-semibold mb-4'>
                                            <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></path></svg>
                                            <span className='text-neutralDGrey hover:text-brandPrimary cursor-pointer text-1xl px-2'>Shekhar Nagar A-205,<br /> Parera Wadi, Dahisar west<br /> Mumbai 400068</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MyFooter />
                        <ScrollToTopOnPageChange />
                    </div >
                )
            }
        </>
    )
}
