import React from 'react'
import { Product } from '../data/constatnts'

export default function Products() {
    return (
        <div id='product'>
            {/* about text */}
            <div className='px-4 1g:px-14 max-w-screen-2x1 mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={Product.image} alt="" width={300} />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl  text-neutralDGrey font-semibold mb-4 md:w-4/5'>{Product.title}</h2>
                        <p className='md:w-3/4 text-sm ☐ text-neutralGrey mb-8'>
                            {Product.content}
                        </p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* company stats */}
            {/* <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'>
                        <img src={'https://github.com/Sanskar0124/Insurance-Project/blob/master/src/assets/images/health_insurance.png?raw=true'} alt="" width={400} />
                    </div>


                    <div className='md:w-2/3 mx-auto'>
                        <div>
                            <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>
                                fgldskjmslkgjsdlgjsflgjsd gjsgjsl;kjg jgkl ngksdf nklsngsfdlkj gnslkg nsdg ns dgfgk sdk
                                sdg skdj g;lsjgslfd gjdg sdkg sdflk gnsfdlk gn;s dfgd gjsdp ogjsog jsdogsopg jpogjsfg sdg
                                hgfsdh fgsdhfsdghggfdsh ghfg hsdf hdfgsh ghsh stfresdf szg dgstrhyg gsftdrg fdsd sdg drsfgsrdg
                                s dgsdrg esrdfg saer etg szedrtg esdrzfg drftg vvcf tb vf gtfv trgfgv hf hggfh fghd fg f tghdf tdrgsx
                                f tdrgf tdrgf htd htdg dfhg f d fdf d ff tgf ghf ghf hdg xhgth h bv bc th dr hgftgdrhydshgbxv c tdr</p>
                            <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                            <p className='text-base text-neutralGrey mb-8'>British Dragon Boat Racing Association</p>

                            <div>
                                <div className='flex item-center gap-8 flex-wrap'>
                                    <img src="/src/assets/company1.png" alt="company 1" className='cursor-pointer' />
                                    <img src="/src/assets/company2.png" alt="company 2" className='cursor-pointer' />
                                    <img src="/src/assets/company3.png" alt="company 3" className='cursor-pointer' />
                                    <img src="/src/assets/company4.png" alt="company 4" className='cursor-pointer' />
                                    <img src="/src/assets/company5.png" alt="company 5" className='cursor-pointer' />
                                    <img src="/src/assets/company6.png" alt="company 6" className='cursor-pointer' />
                                    <div className='flex items-center gap-8'>
                                        <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700' >
                                            Meet all customers
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="11"
                                                viewBox="0 0 17 11"
                                                fill="none"
                                                className='inline-block ml-2'
                                            >
                                                <path
                                                    d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L15.39905"
                                                    stroke="#4CAF4F" />
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}
