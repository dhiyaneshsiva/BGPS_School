import React from 'react'
import "./Founder-Details.css"

const Founder_Details = ({ data }) => {
    return (
        <div>
            <div className="founder-details-page">
                <div className="founder-details-container">
                    <div className="founder-details-content">
                        <div className="founder-details-content-left">
                            <div className="founder-details-content-left-img">
                                <img src={data.icon} alt="" />
                            </div>
                        </div>
                        <div className="founder-details-content-para">
                            <h1>
                                {data.title}
                            </h1>
                            <ul>
                                {data?.list.map((value, index) => {
                                    return (
                                        <li key={index}>
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