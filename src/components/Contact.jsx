import React, { useRef } from 'react';
import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_74l9cg8', 'template_4lzdq2u', form.current, 'HOe5rPin4ZxGzYgra')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });
    };

  return (
    <section className='py-16 lg:selection mb-8' id="contact">
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row'>
                <motion.div 
                 whileInView={{opacity:1, x:0}}
                 initial={{opacity:0, x:-100}}
                 transition={{duration:1}}
                className='flex-1 flex justify-center lg:justify-start items-center py-6'>
                    <div>
                        <h4 className='text-xl uppercase font-normal mb-2 tracking-wide'>Get in touch</h4>
                        <h2 className=' text-4xl lg:text-7xl leading-none mb-12'>Let's work <br/> together!</h2>
                        <p className="my-2">{CONTACT.address}</p>
                        <p className="my-2">{CONTACT.phoneNo}</p>
                        <a href="#" className="border-b">{CONTACT.email}</a>
                        
                    </div>
                </motion.div>
                <motion.form 
                ref={form}
                onSubmit={sendEmail}
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-25 p-6 items-start">
                    <input  className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus border-cyan-300 transition-all ' type="text" placeholder="Your name" name='user_name'></input>
                    <input  className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus border-cyan-300 transition-all ' type="email" placeholder="Your email" name='user_email'></input>
                    <textarea className='bg-transparent border-b py-8 outline-none w-full placeholder:text-white focus border-cyan-300 transition-all resize-none mb-8' placeholder="Your message" name="message"></textarea>
                    <button className='px-4 py-2 bg-cyan-500 text-white rounded-lg text-lg hover:bg-cyan-400' type='submit' value="Send">Send message</button>
                </motion.form>
            </div>
        </div>
    </section>
  )
}

export default Contact





{/* <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className="mx-10 text-center text-4xl">Get in Touch</motion.h1>
        <div className=" text-center tracking-tighter">
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className="my-4">{CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="my-4">{CONTACT.phoneNo}</motion.p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </div>
    </div> */}




