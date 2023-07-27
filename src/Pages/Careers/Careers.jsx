import React from 'react'
import "./Careers.css"

// Images
import Avatar from "../../Assets/admissionCrop.png"
import Image1 from "../../Assets/Careers/Image1.jpg"
import Image2 from "../../Assets/Careers/Image2.jpg"
import Image3 from "../../Assets/Careers/Image3.jpg"
import Image4 from "../../Assets/Careers/Image4.jpg"
import Image5 from "../../Assets/Careers/Image5.jpg"
import Image6 from "../../Assets/Careers/Image6.jpg"
import Image7 from "../../Assets/Careers/Image7.jpg"
import Image8 from "../../Assets/Careers/Image8.jpg"
import Image9 from "../../Assets/Careers/Image9.jpg"

const Careers = () => {

    const ImageGrid = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image9,
    ]
    return (
        <div>
            <div className='careers-page'>
                {/* Sec1 */}
                <div className='careers-sec1'>
                    <div className='careers-sec1-container'>
                        <div className='careers-sec1-content'>
                            <div className='careers-sec1-container-title'>
                                <h1>
                                    Careers
                                </h1>
                            </div>
                            <div className='careers-sec1-container-para'>
                                <p>
                                    We at the BGS Public School are institutions of
                                    excellence built on the trinity of exceptional
                                    curriculum, outstanding co-curricular, and deep
                                    value systems. To shape our students into leaders
                                    of tomorrow, we ensure to provide them with quality
                                    education in a caring environment. They are guided
                                    by teachers to become confident young adults, by
                                    identifying their individual unique potentials.
                                </p>
                                <p>
                                    The BGS Public School invites you to become an integral
                                    part of our endeavor to shape and mold young minds. You
                                    will be joining an institution with a wholehearted
                                    commitment in developing confident and well-rounded
                                    individuals. Besides subject expertise, an openness
                                    to innovative and imaginative ways to teach little
                                    ones. If education is a subject you are passionate
                                    about, do reach out to us to indicate your interest.
                                </p>
                                <p>
                                    We are an equal opportunity employer, and our school is
                                    equipped with the latest in state-of-the-art educational
                                    aids. We promise attractive remuneration packages for our
                                    staff along with growth opportunities.
                                </p>
                                <p>
                                    We are always looking for exceptional people who will
                                    enrich our school environment. If you think you have the
                                    experience and attitude to make a critical difference,
                                    please do apply.
                                </p>
                            </div>
                        </div>
                        <img src={Avatar} alt='Avatar' className='careers-sec1-container-image' />
                    </div>
                    <div className='careers-sec1-image-grid'>
                        {
                            ImageGrid.map((value, index) => {
                                return (
                                    <div className='careers-sec1-image-grid-img'>
                                        <img key={index} src={value} alt='img' />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Sec1 End */}
            </div>
        </div>
    )
}

export default Careers
