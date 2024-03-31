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
                        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                            <div>
                                <img src={'https://github.com/Sanskar0124/Insurance-Project/blob/master/src/assets/images/health_insurance.png?raw=true'} alt='' width={800} />
                            </div>

                            {/* hero text  */}
                            <div className='md:w-1/2'>
                                <h1 className='text-3xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>{item.title}<br />
                                    <span className='text-brandPrimary text-2xl '>{item?.content2}</span>
                                </h1>
                                <p className="text-neutralGrey text-base mb-8">{item?.content}</p>
                                <button className="btn-primary">{item?.contact}</button>
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
