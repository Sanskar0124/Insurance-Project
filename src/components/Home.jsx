import { Carousel } from 'flowbite-react'
import React from 'react'

export default function Home() {
    return (
        <div className='bg-neutralSilver'>
            <div className='px-4 lg:px-14 max-w-screen-2cl mx-auto min-h-screen h-screen'>
                <Carousel >
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <img src={'https://github.com/Sanskar0124/Insurance-Project/blob/master/src/assets/gifs/health-insurance.gif?raw=true'} alt='' />
                    </div>
                    <div className="flex h-full items-center justify-center">
                        Slide 2
                    </div>
                    <div className="flex h-full items-center justify-center">
                        Slide 3
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
