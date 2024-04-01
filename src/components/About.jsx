import React from 'react'
import { Bio } from '../data/constatnts'

export default function About() {
    return (
        <div id='about'>
            {/* about text */}
            <div className='px-4 1g:px-14 max-w-screen-2xl mx-auto mb-10'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={'https://github.com/Sanskar0124/Insurance-Project/blob/master/src/assets/images/health_insurance2.png?raw=true'} alt="" width={400} />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl  text-neutralDGrey font-semibold mb-4 md:w-4/5'>Your Trusted Insurance Partner</h2>
                        <p className='md:w-3/4 text-sm ☐ text-neutralGrey mb-8'>
                            Welcome to {Bio.name}, where your peace of mind is our priority. With personalized solutions and expert guidance, we're dedicated to ensuring you have the coverage you need. Trust in our expertise and commitment to your financial security. At {Bio.name}, we're not just your insurance provider; we're your trusted partner in safeguarding your future.
                        </p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* company stats */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Our Commitment:<br />
                            <span className='text-brandPrimary text-1xl'>Empowering Financial Security</span></h2>
                        <p>We reached here with our hard work and dedication</p>
                    </div>

                    {/* stats */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="" alt="members" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="" alt="members" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="" alt="members" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="" alt="members" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
