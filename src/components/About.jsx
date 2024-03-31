import React from 'react'

export default function About() {
    return (
        <div id='about'>
            {/* about text */}
            <div className='px-4 1g:px-14 max-w-screen-2x1 mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={'https://github.com/Sanskar0124/Insurance-Project/blob/master/src/assets/images/health_insurance.png?raw=true'} alt="" width={400} />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl  text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of
                            spending three years at Pixelgrade</h2>
                        <p className='md:w-3/4 text-sm ☐ text-neutralGrey mb-8'>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est
                            varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa
                            pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* company stats */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md: w-2/3'>Helping a local <br />
                            <span className='text-brandPrimary'>business reinvent itself</span></h2>
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
