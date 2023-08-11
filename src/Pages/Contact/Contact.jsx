import React from 'react'
import "./Contact.css"


// Images
import Avatar from "../../Assets/admissionCrop.png"

const Contact = () => {
    window.scroll(0, 0)
    return (
        <div className='contact-page'>
            <div className='careers-sec1'>
                <div className='careers-sec1-container'>
                    <div className='careers-sec1-content'>
                        <div className='careers-sec1-container-title'>
                            <h1 style={{ textTransform: "uppercase" }}>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='100'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    C
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='300'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    o
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='500'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    n
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='500'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    t
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='700'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    a
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='900'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    c
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='1100'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    t
                                </span>
                                &nbsp;
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='1300'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    u
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='1500'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    s
                                </span>
                                {/* Careers */}
                            </h1>
                        </div>
                        <div className='careers-sec1-container-para'>
                            <h1
                                data-aos="fade-right"
                                data-aos-delay='100'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true"
                            >
                                BGS Public School
                            </h1>
                            <address
                                data-aos="fade-right"
                                data-aos-delay='300'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true">
                                BGS Health & Education City
                                <br />
                                #67, Dr Vishnuvardhan Road,
                                <br />
                                Kengeri,
                                <br />Bangalore – 560060,
                                <br />KARNATAKA,
                                <br /> INDIA.
                                <br />
                                <b>
                                    Phone:
                                </b> +91-97403-91888, +91-97403-81888
                                <br />
                                <b>
                                    Email:
                                </b>  info@bgspskengeri.edu.in
                            </address>
                            <br />
                            <p
                                data-aos="fade-right"
                                data-aos-delay='500'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true">
                                <b>
                                    For admission enquiry kindly send an email to : &nbsp;
                                </b>
                                admissions@bgspskengeri.edu.in
                            </p>
                        </div>
                    </div>
                    <img src={Avatar} alt='Avatar' className='careers-sec1-container-image' />
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-delay='700'
                    data-aos-duration='1000'
                    data-aos-easing="linear"
                    data-aos-once="true"
                    className='contact-page-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124453.37529847102!2d77.495838!3d12.896918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f16953a6b8b%3A0xfb95d40f56b02c16!2sBGS%20Public%20School!5e0!3m2!1sen!2sus!4v1691755161632!5m2!1sen!2sus" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div >
    )
}

export default Contact
