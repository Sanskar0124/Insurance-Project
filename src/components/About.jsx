import React from 'react'
import { Bio, AboutUs } from '../data/constatnts'
import Typewriter from 'typewriter-effect';

export default function About() {
    return (
        <div id='about'>
            {/* about text */}
            <div className='px-4 1g:px-14 max-w-screen-2xl mx-auto mb-10'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={AboutUs.image} alt="" width={400} />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl  text-neutralDGrey font-semibold mb-4 md:w-4/5'>{AboutUs.title}</h2>
                        <p className='md:w-3/4 text-sm ☐ text-neutralGrey mb-8'>{AboutUs.content}</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* company stats */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-brandPrimary font-semibold mb-4 md:w-2/3'>Our Commitment:<br />
                            <span className='text-neutralDGrey text-1xl'>Empowering Financial Security</span></h2>
                        <p className='text-brandPrimary font-semibold text-2xl'>
                            <Typewriter
                                options={{
                                    strings: AboutUs.typeWriter,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </p>
                    </div>

                    {/* stats */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>

                        <img src={AboutUs.image2} alt="" width={200} />

                    </div>
                </div>
            </div>

        </div>
    )
}
