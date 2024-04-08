import { Carousel } from 'flowbite-react'
import React from 'react'
import { Slides } from '../data/constatnts';
import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        <div className='bg-neutralSilver' id='home'>
            <div className='px-4 lg:px-14 max-w-screen-2cl mx-auto min-h-screen h-screen'>
                <Carousel >
                    {Slides.map((item) => (
                        <div className="md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                            <div>
                                <img className='hidden lg:flex' src={item?.img} alt='' width={item?.id === 1 ? 400 : 700} />
                                <img className='md:hidden' src={item?.img} alt='' width={item?.id === 1 ? 300 : 900} />
                            </div>

                            {/* hero text  */}
                            <div className='md:w-1/2'>
                                <h1 className='text-3xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>{item.title}<br />
                                    <span className='text-brandPrimary text-2xl '>{item?.content2}</span>
                                </h1>
                                <p className="text-neutralGrey text-base mb-8">{item?.content}</p>
                                <a href="tel:+919137479331" className=" btn-primary">{item?.contact}</a>
                            </div>
                        </div>
                    )
                    )
                    }


                </Carousel>
            </div>
        </div>
    )
}
