import React from 'react'
import "./About.css"

// Images 
import Avatar from "../../Assets/curricular_left.png"
import Bgs from "../../Assets/bgs.png"
import GreenBox from "../../Assets/green.png"
import { useMediaQuery } from '@mantine/hooks'
import A from '../../Assets/A.png'
import a from "../../Assets/A-1.png"
import B from "../../Assets/B.png"
import C from "../../Assets/C.png"
import YellowCircle from "../../Assets/yellow.png"

const About = () => {

    const Query = useMediaQuery('(max-width:1200px)')
    return (
        <div>

            {/* About Section 1  */}
            <section>
                <div className='about-sec-1-container'>
                    <div className='about-sec-1'>
                        <div className='about-sec-1-left'>
                            <div className='about-sec-1-left-box'>
                                <img src={Bgs} alt='img' />
                                <img src={GreenBox} alt='img' />
                            </div>
                            <div className='about-sec-1-left-avatar'>
                                <img src={Avatar} alt='img' />
                            </div>
                        </div>
                        <div className='about-sec-1-right'>
                            <div className='about-sec-1-right-title'>
                                <h1>
                                    AT BGS PUBLIC
                                </h1>
                                <h1>
                                    SCHOOL
                                </h1>
                            </div>
                            <i>
                                <p>
                                    This school is headed by a very highly
                                    qualified and experienced Principal
                                    who has the support of a team of dedicated,
                                    enthusiastic teachers   who leave no
                                    stone unturned to help the children
                                    in their care.

                                    At BGS Public School,
                                    a sincere effort is made to provide
                                    holistic   education based on the CBSE
                                    curriculam. The school prepares the
                                    children to be rooted in the great
                                    Indian culture and tradition while
                                    preparing them to face the global
                                    challenges of the present-day world.

                                    The curriculam here is aimed at
                                    providing excellent education in
                                    scholastic subjects, co-
                                </p>
                            </i>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section 1 End */}

            {/* About Section 2 */}

            <section>
                <div className='about-sec-2'>
                    <div className='about-sec-2-container'>
                        <div className='about-sec-2-container-left'>
                            <div className='about-sec-2-container-left-title'>
                                <h1>
                                    ABOUT BGS
                                </h1>
                                <h1>
                                    PUBLIC SCHOOL
                                </h1>
                            </div>
                            <div className='about-sec-2-container-left-para'>
                                <i>
                                    <p>
                                        BGS Public School which was
                                        founded in 2006 by His Holiness
                                        Padma Bhushana Jadaguru Sri Sri Sri
                                        Balagangadharanatha Swamiji under
                                        the aegis of Sri Adichunchangiri
                                        Shikshana Trust, is a a co-educational
                                        day school. It occupies a prominent
                                        place in the 60 acres of BGS Health
                                        and Education City Campus on Uttarahalli
                                        Road, away from the hustle and the
                                        bustle of the city but also among
                                        the parent community of West and
                                        South Bangalore. The school has an
                                        excellent infrastructure with spacious
                                        and well-ventilated classrooms, pure
                                        drinking water facility, library,
                                        state of the art computer labs, the
                                        laboratories for different.
                                    </p>
                                </i>
                            </div>
                        </div>
                        <div className='about-sec-2-container-right'>
                            <div
                                className='about-sec-2-container-right-letters'>
                                <img src={A} alt='img' />
                                <img src={a} alt='img' />
                                <img src={B} alt='img' />
                                <img src={C} alt='img' />
                            </div>
                            <div
                                className='about-sec-2-container-right-circle'>
                                <div className='about-sec-2-container-right-circle-box' >
                                    <img src={Bgs} alt='img' />
                                    <img src={GreenBox} alt='img' />
                                    <img src={YellowCircle} alt='img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section 2 End */}



            {/* About Section 3 */}

            <section>
                <div className='about-sec-3'>
                    
                </div>
            </section>


            {/* About Section 3 End */}

        </div>
    )
}

export default About
