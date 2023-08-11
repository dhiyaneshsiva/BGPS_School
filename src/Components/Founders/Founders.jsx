import React from 'react'
import "./Founders.css"


const Founders = ({ data }) => {
    return (
        <div>
            <div className="founders-page">
                <div className="founder-container">
                    <div className="founders-container-left">
                        <div
                            data-aos="zoom-in"
                            data-aos-delay='100'
                            data-aos-duration='1000'
                            data-aos-easing="linear"
                            data-aos-once="true" className="founders-container-left-image"
                        >
                            <img src={data?.icon} alt="Founder" />
                        </div>
                        <p
                            data-aos="zoom-in"
                            data-aos-delay='300'
                            data-aos-duration='1000'
                            data-aos-easing="linear"
                            data-aos-once="true"
                        >
                            {data?.title}
                        </p>
                    </div>
                    <div className="founders-container-right">
                        <h1
                            data-aos="zoom-in"
                            data-aos-delay='500'
                            data-aos-duration='1000'
                            data-aos-easing="linear"
                            data-aos-once="true"
                        >
                            {data?.title}
                        </h1>
                        <ul>
                            {
                                data?.list?.map((value, index) => {
                                    return (
                                        <li
                                            key={index}
                                            data-aos="fade-left"
                                            data-aos-delay={index * 200}
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true"
                                        >
                                            {value}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Founders