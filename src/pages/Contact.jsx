import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Phone from '../assets/phone.png'
import Email from '../assets/email.png'
import Address from '../assets/address.png'
import '../scss/contact.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

    const [done, setDone] = useState(false);
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_0iwd0dp', 'template_2bky28o', formRef.current, 'n9e4WIe3W2qTXKl6X')
            .then((result) => {
                console.log(result.text);
                setDone(true)
                setTimeout(() => {
                    setDone(false)
                }, 2000);
                console.log(formRef);
            }, (error) => {
                console.log(error.text);
            });
    }

    AOS.init({
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out',
        once: true,
    });

    return (
        <div className='c' >
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 data-aos='zoom-in' className="c-title">HELP US MAKE PIZZA HUNGER BETTER</h1>
                    <div data-aos='zoom-in' className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 70377 96592
                        </div>
                    </div>

                    <div data-aos='zoom-in' className="c-info">

                        <div className="">
                            <a className='c-info-item' href="mailto:anas98144@gmail.com" onclick="window.location.href='np.html'">
                                <img src={Email} alt="" className="c-icon" />
                                pizzahunger@gmail.com
                            </a>
                        </div>
                    </div>
                    <div data-aos='zoom-in' className="c-info">
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Keshav Nagar, Bazpur U.S.Nagar -262401, Uttarakhand
                        </div>
                    </div>

                </div>
                <div className="c-right">
                    <p data-aos='zoom-in' className="c-desc">
                        Pizza hunger brings you the one and only fully loaded bbq paneer pizza, tomatoes and dripping mozzarella cheese.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input data-aos='zoom-in' type="text" name='user_name' placeholder='Name' required />
                        <input data-aos='zoom-in' type="text" name='user_subject' placeholder='Subject' required />
                        <input data-aos='zoom-in' type="text" name='user_email' placeholder='Email' required />
                        <textarea data-aos='zoom-in' name="Query..."
                            placeholder='Message...'
                            rows="5"  ></textarea>
                        <button data-aos='zoom-in' data-aos-offset="10" >Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

// style={{ resize: 'none' }}