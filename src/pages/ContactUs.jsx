import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Label, TextInput, Textarea } from "flowbite-react";
import Typewriter from 'typewriter-effect';
import { ContactUsTxt } from '../data/constatnts';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import MyFooter from '../components/MyFooter';
import { helix } from 'ldrs'
helix.register()

export default function ContactUs() {
    const [isLoading, setIsLoading] = useState(false)
    const [from_name, setFrom_name] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.sendForm('service_zf1n99h', 'template_oue737h', e.target, 'jCl7L09OS-neWHk3-')
            .then((result) => {
                console.log(result.text);
                setFrom_name('')
                setPhone_number('')
                setMessage('')
                setIsLoading(false);
                alert('Your request has been successfully submitted. We will get back to you shortly.');
            }, (error) => {
                console.error(error.text);
                alert('Error sending email');
            });
    };

    function ScrollToTopOnPageChange() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }


    return (
        <>
            {isLoading ?
                (
                    <div className='flex justify-center items-center loader-body'>
                        <l-helix
                            size="100"
                            speed="2.5"
                            color="#4CAF4F"
                        ></l-helix>
                    </div>
                )
                :
                (
                    <div>
                        <Navbar home={false} page={'contact'} />
                        <form onSubmit={sendEmail} className='flex flex-col justify-center items-center mt-16 pt-8'>
                            <p className='text-brandPrimary font-semibold lg:text-3xl text-2xl mx-10'>
                                <Typewriter
                                    options={{
                                        strings: ContactUsTxt,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </p>
                            <div className=" w-2/3 gap-4 justify-center mt-8">
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="small" value="Name" />
                                    </div>
                                    <TextInput value={from_name} onChange={(e) => setFrom_name(e.target.value)} name="from_name" id="small" type="text" sizing="md" required />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="base" value="Phone Number" />
                                    </div>
                                    <TextInput value={phone_number} onChange={(e) => setPhone_number(e.target.value)} name="phone_number" id="base" type="number" sizing="md" required />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="large" value="Message" />
                                    </div>
                                    <Textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="large" rows={4} />
                                </div>
                            </div>
                            <button className="mt-5 btn-primary">Submit</button>
                        </form>

                        <MyFooter />
                        <ScrollToTopOnPageChange />s
                    </div >
                )
            }
        </>
    )
}
