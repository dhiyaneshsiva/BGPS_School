import React, { useEffect, useRef, useState } from 'react'
import "./Mandatory.css"

// Images
import BlueTick from "../../Assets/tick2.png"

// Grid Image
import Img1 from "../../Assets/image1.png"
import Img2 from "../../Assets/image2.png"
import Img3 from "../../Assets/image3.png"
import Img4 from "../../Assets/image4.png"
import Img5 from "../../Assets/image5.png"
import Img6 from "../../Assets/image6.png"
import Img7 from "../../Assets/image7.png"
import Img8 from "../../Assets/image8.png"
import Img9 from "../../Assets/image9.png"
import Img10 from "../../Assets/image10.png"
import Img11 from "../../Assets/image11.png"
import Img12 from "../../Assets/image12.png"


// Vannila Tilt
import VanillaTilt from 'vanilla-tilt';



const Mandatory = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const image1 = useRef([
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
    ])
    const [currentImage, setCurrentImage] = useState(0)

    const gridImages = [
        Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12,
    ]

    useEffect(() => {
        VanillaTilt.init(image1.current[currentImage].current, {
            max: 30,
            speed: 1000,
            scale: 1.2,
            glare: false,
            zIndex: 200
        })
        image1.current[currentImage].current.style.zIndex = '10'

    }, [currentImage])


    const MouseOut = (e) => {
        e.target.style.zIndex = "-2"
    }

    return (
        <div>
            <div className="mandatory-page">
                <div className="mandatory-container">
                    <div className="mandatory-top">
                        <div className="mandatory-top-title">
                            <h1>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='100'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    Mandatory
                                </span>
                                <br />
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='300'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    Disclosures
                                </span>
                            </h1>
                            <img
                                data-aos="zoom-in"
                                data-aos-delay='700'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true" src={BlueTick} alt="Blue Tick" />
                        </div>
                        <div className="mandatory-top-para">
                            <p
                                data-aos="fade-right"
                                data-aos-delay='500'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true"
                            >
                                Skills like teamwork, leadership,
                                patience, discipline, learning from
                                failure, Sportsmanship, etc., are
                                developed only when children play
                                sports regularly, and these skills
                                are equally important when it comes
                                to studies and management.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Grid */}

                    <div className="mandatory-bottom-grid">
                        {
                            gridImages?.map((value, index) => {
                                return (
                                    <div
                                        data-aos="fade-down"
                                        data-aos-delay={index * 200}
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                        className="mandatory-bottom-grid-img" key={index}>
                                        <img
                                            className='grid-image'
                                            ref={image1.current[index]}
                                            onMouseOver={(e) => { setCurrentImage(index) }}
                                            onMouseOut={MouseOut}
                                            src={value} alt="Images" />
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Bottom Grid End */}

                </div>
            </div>
        </div>
    )
}

export default Mandatory