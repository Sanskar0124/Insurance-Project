import React from 'react'
import { AboutUs } from '../data/constatnts'
import Typewriter from 'typewriter-effect';

export default function Services() {

    const services = [
        { id: 1, title: "Expert Consultation", descroption: "Speak with our experienced advisors for personalized insurance guidance and tailored solutions", image: "https://github.com/Sanskar0124/Insurance-Project/blob/master/src/assets/services%20images/expert.png?raw=true" },
        { id: 2, title: "Customized Plans", descroption: "Explore our range of insurance plans tailored to your unique needs, lifestyle, and budget", image: "https://github.com/Sanskar0124/Insurance-Project/blob/master/src/assets/services%20images/plan.png?raw=true" },
        { id: 3, title: "24/7 Support", descroption: "Access our dedicated team for round-the-clock assistance with all your insurance inquiries and needs", image: "https://github.com/Sanskar0124/Insurance-Project/blob/master/src/assets/services%20images/support.png?raw=true" },
    ]
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
            {/* <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutralGrey'>We have been working with some Fortune 500+ clients</p>
                <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                    <img src="" alt="Company 1" />
                    <img src="" alt="Company 2" />
                    <img src="" alt="Company 3" />
                    <img src="" alt="Company 4" />
                    <img src="" alt="Company 5" />
                    <img src="" alt="Company 6" />
                    <img src="" alt="Company 7" />
                </div>
            </div> */}

            {/* services card  */}
            <div className='mt-0 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>SureCare Advantage</h2>
                <p className='text-neutralGrey'>Experience peace of mind with our expert guidance and personalized insurance solutions</p>
            </div>

            {/* cards  */}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px]
            mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
            hover:border-indigo-700 transition-all duration-300 flex items-center justify-center
            h-full'>
                        <div>
                            <div className=' bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-t1-3xl rounded-br-3xl'>
                                <img src={service?.image} alt="" className='-ml-5' color='red' />
                            </div>
                            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm ☐ text-neutralGrey'>{service.descroption}</p>
                        </div>
                    </div>)
                }
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