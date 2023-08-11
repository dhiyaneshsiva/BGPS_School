import React from 'react'
import "./Founder-Details.css"

const Founder_Details = ({ data }) => {
    return (
        <div>
            <div className="founder-details-page">
                <div className="founder-details-container">
                    <div className="founder-details-content">
                        <div className="founder-details-content-left">
                            <div
                                data-aos="zoom-in"
                                data-aos-delay='100'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true"
                                className="founder-details-content-left-img">
                                <img src={data?.icon} alt="" />
                            </div>
                        </div>
                        <div className="founder-details-content-para">
                            <h1
                                data-aos="fade-right"
                                data-aos-delay='300'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true"
                            >
                                {data?.title}
                            </h1>
                            <ul>
                                {data?.list?.map((value, index) => {
                                    return (
                                        <li
                                            key={index}
                                            data-aos="fade-left"
                                            data-aos-delay={index * 200}
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true">
                                            {value}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Founder_Details