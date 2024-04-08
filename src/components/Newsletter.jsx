import React, { useState } from 'react'
import { AboutUs } from '../data/constatnts'
import Typewriter from 'typewriter-effect';
import { Button, Modal } from "flowbite-react";
import { Label, TextInput, Textarea } from "flowbite-react";
import emailjs from 'emailjs-com';

export default function Newsletter({ setIsLoading }) {
    const [openModal, setOpenModal] = useState(false);
    const [from_name, setFrom_name] = useState('')
    const [phone_number, setPhone_number] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.sendForm('service_zf1n99h', 'template_39lpbp4', e.target, 'jCl7L09OS-neWHk3-')
            .then((result) => {
                console.log(result.text);
                setFrom_name('')
                setPhone_number('')
                setOpenModal(false)
                setIsLoading(false);
                alert('Your request has been successfully submitted. We will get back to you shortly.');
            }, (error) => {
                console.error(error.text);
                alert('Error sending email');
            });
    };

    return (
        <div>
            <div className='px-4 lg:px-12 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='request'>
                <div className='flex item-center justify-center  mx-auto'>
                    <div className='text-center'>
                        <h2 className='lg:text-5xl text-2xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>
                            Protecting today, securing tomorrow, embracing life.</h2>
                        <div className='flex items-center justify-center gap-8'>
                            <button onClick={() => setOpenModal(true)} className='btn-primary text-white'>Request a call <svg xmlns="http://www.w3.org/2000/
                            svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='inline-block ml-2'>
                                <path d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.
                                5004 4.00004L1.50012 4.00004" stroke="white" />
                            </svg></button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} className='modal-container'>
                <Modal.Header>Request Call</Modal.Header>
                <Modal.Body>
                    <div className="">
                        <form onSubmit={sendEmail} className='flex flex-col justify-center items-center'>
                            <div className=" w-2/3 gap-4 justify-center ">
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
                            </div>
                            <button className="mt-5 btn-primary">Submit</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
