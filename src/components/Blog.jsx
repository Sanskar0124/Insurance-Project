import React from 'react'

export default function Blog() {
    const blogs = [
        { id: 1, title: " fdghfdgh dfgh fgh dhdghdf dgfhfh", image: "https://github.com/Sanskar0124/Insurance-Project/blob/master/src/assets/about%20us/health_insurance2.png?raw=true" },
        { id: 2, title: "fdgjikhs dlgh lfsdkjghklsfjg nsljkg sdljfg ssdgskljgslkgsjgg nbl", image: "https://github.com/Sanskar0124/Insurance-Project/blob/master/src/assets/about%20us/health_insurance2.png?raw=true" },
        { id: 3, title: "sd gsfdgs fgsd sfgsgsd", image: "https://github.com/Sanskar0124/Insurance-Project/blob/master/src/assets/about%20us/health_insurance2.png?raw=true" },
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl  text-neutralDGrey font-semibold mb-4'>Insuring with Integrity</h2>

            </div>

            {/* all blogs  */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={blog.image} alt="" width={350} className='hover:scale-95 transition-all duration-300' />
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                            <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>

                            <div className='flex items-center justify-center gap-8'>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700' >
                                    Readmore
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
                    )
                }
            </div>
        </div>
    )
}
