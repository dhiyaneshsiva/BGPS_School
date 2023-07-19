import React from 'react'
import "./Founders.css"


const Founders = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div className="founders-page">
                <div className="founder-container">
                    <div className="founders-container-left">
                        <div className="founders-container-left-image">
                            <img src={data?.icon} alt="Founder" />
                        </div>
                        {/* <img src="" alt="" /> */}
                        <p>
                            {data?.title}
                        </p>
                    </div>
                    <div className="founders-container-right">
                        <h1>
                            {data?.title}
                        </h1>
                        <ul>
                            {
                                data?.list?.map((value,index)=>{
                                    return (
                                        <li key={index}>
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