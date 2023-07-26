import React from 'react'
import "./Guidelines.css"

// Images
import Admission from "../../Assets/admissionCrop.png"
import Badge from "../../Assets/tick.png"
import Calender from "../../Assets/calender.png"
import Admission2 from "../../Assets/admission2.png"
import Hands from "../../Assets/Hands.png"


// Mantine UI
import { Stepper, ThemeIcon } from '@mantine/core'

// Tabler Icons
import { BrightnessDown } from 'tabler-icons-react';

const Guidelines = () => {
    window.scroll(0, 0)
    return (
        <div>
            <div className='Guidelines-page'>

                {/* Section1 */}
                <section>
                    <div className='guideline-sec-1-container'>
                        <div className='guideline-sec-1-content'>
                            <h3>
                                Admissions Process And
                            </h3>
                            <h1>
                                Guidelines
                            </h1>
                            <p>
                                Being one of the best CBSE schools in Kengeri and R.R. Nagar surroundings,
                                we not only focus on academic excellence, but also extend learning beyond
                                the classroom.
                            </p>
                            <br />
                            <p>
                                The school delivers a holistic approach towards education where students at
                                BGS PS are encouraged to broaden their horizons by exploring their passions
                                in the field of arts and sports.
                            </p>
                            <Stepper className='stepper'>
                                <Stepper.Step>1</Stepper.Step>
                                <Stepper.Step>2</Stepper.Step>
                                <Stepper.Step>3</Stepper.Step>
                            </Stepper>
                        </div>
                        <img src={Admission} alt='Admission' className='admission' />
                        <img src={Calender} alt='Calender' className='calender' />
                        <img src={Badge} alt='Badge' className='badge' />
                    </div>
                </section>
                {/* Section1 End */}

                {/* Section2 */}
                <section>
                    <div className='guideline-sec-2-container'>
                        <div className='guideline-sec-2-content-left'>
                            <h1>
                                Enrollments
                            </h1>
                        </div>
                        <div className='guideline-sec-2-content-right'>
                            <h2>
                                We offer enrollments throughout the year as long as the seats are available
                            </h2>
                            <p>
                                Our Admissions team will ensure the smoothest possible transition
                                for your family. Kindly refer to the age-matrix for admission. This
                                matrix is created as per the National Educational Policy and the
                                circular issued by the Karnataka State Board of Education.
                                (Click Age-matrix circular-2023-24.pdf for the circular)
                            </p>
                        </div>
                        <img src={Admission2} alt='Enrollment' className='enrollment' />
                    </div>
                </section>
                {/* Section2 End */}


                {/* Section3 */}
                <section>
                    <div className='guideline-sec-3-container'>
                        <div className='guideline-sec-3-div'>
                            <div className='guideline-sec-3-div-hover-img1'>
                                <div className='guideline-sec-3-div-hover-img1-content'>
                                    <h1>
                                        Seeking admission to
                                    </h1>
                                    <ul>
                                        <li>
                                            Nursery
                                        </li>
                                        <li>
                                            LKG
                                        </li>
                                        <li>
                                            UKG
                                        </li>
                                        <li>
                                            GRADE 1
                                        </li>
                                    </ul>
                                </div>
                                <img src={Hands} alt='Hand' className='hand' />
                            </div>
                            <div className='guideline-sec-3-div-hover-img2'>
                                <div className='guideline-sec-3-div-hover-img2-content'>
                                    <h1>
                                        Age as on
                                        01 June 2023
                                    </h1>
                                    <ul>
                                        <li>
                                            3 Years
                                        </li>
                                        <li>
                                            4 Years
                                        </li>
                                        <li>
                                            5 Years
                                        </li>
                                        <li>
                                            6 Years
                                        </li>
                                    </ul>
                                </div>
                                <img src={Badge} alt='Hand' className='guideline-sec-3-div-hover-img2-badge' />
                            </div>
                            <div className='guideline-sec-3-div-hover-img3'>
                                <div className='guideline-sec-3-div-hover-img3-content' >
                                    <h1>
                                        Eligibility
                                    </h1>
                                    <ul>
                                        <li>
                                            NA
                                        </li>
                                        <li>
                                            Nursery/Montessori Level 1
                                        </li>
                                        <li>
                                            Kindergarten 1/LKG/Montessori Level 2
                                        </li>
                                        <li>
                                            Kindergarten 2/UKG/Montessori Level 3
                                        </li>
                                    </ul>
                                </div>
                                <img src={Calender} alt='Hand' className='guideline-sec-3-div-hover-img3-calender' />
                            </div>
                        </div>
                        <div className='guideline-sec-3-div2'>
                            <h2>
                                Please Note
                            </h2>
                            <p className='guideline-sec-3-div2-para1'>
                                <BrightnessDown size={"2rem"} />  Admission to other grades will be applicable based on the age-limit to Grade I.
                            </p>
                            <p className='guideline-sec-3-div2-para2'>
                                <BrightnessDown size={"2rem"} />  Preference will be given to the students from the neighborhood, siblings of the
                                students and those who are transferred from one state to another.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Section3 End */}
            </div>
        </div>
    )
}

export default Guidelines
