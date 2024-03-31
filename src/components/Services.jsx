import React from 'react'

export default function Services() {

    const services = [
        { id: 1, title: "Expert Consultation", descroption: "Speak with our experienced advisors for personalized insurance guidance and tailored solutions", image: "" },
        { id: 2, title: "Customized Plans", descroption: "Explore our range of insurance plans tailored to your unique needs, lifestyle, and budget", image: "" },
        { id: 3, title: "24/7 Support", descroption: "Access our dedicated team for round-the-clock assistance with all your insurance inquiries and needs", image: "" },
    ]
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2x1 mx-auto' id='service'>
            {/* <div className='text-center my-8'>
                <h2 className='text-4x1 text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
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
            <div className='mt-20 md: w-1/2 mx-auto text-center'>
                <h2 className='text-4x1 text-neutralDGrey font-semibold mb-3'>Discover the SureCare Advantage</h2>
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
                            <div className=' bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-t1-3x1 rounded-br-3x1'>
                                <img src={service?.image} alt="" className='-ml-5' />
                            </div>
                            <h4 className='text-2x1 font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm ☐ text-neutralGrey'>{service.descroption}</p>
                        </div>
                    </div>)
                }
            </div>

        </div>
    )
}