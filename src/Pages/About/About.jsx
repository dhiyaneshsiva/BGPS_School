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
import logo_main from "../../Assets/logo_main.png";
import logo_body from "../../Assets/logo_body.png";
import logo_circle from "../../Assets/logo_circle.png";
import mission from "../../Assets/mission.png"
import vision from "../../Assets/vision.png"
import tick2 from "../../Assets/tick2.png"
import { Center } from '@mantine/core'

const About = () => {
    window.scroll(0, 0)

    // Mantine Query
    const Query = useMediaQuery('(max-width:1200px)')

    // Data List
    const data = [
        {
            icon: vision,
            title: "Our Vision",
            content:
                "  The vision of BGSPS is to provide opportunities to create Global Citizens and Leaders of tomorrow through traditional values of love, empathy, discipline, respect and to hone the skills required for",
        },
        {
            icon: mission,
            title: "Out Mission",
            content:
                "To provide excellent child-centered and value-based education to all the children in our care so that they grow up to be knowledgeable, responsible and self-confident individuals who are prepared to",
        },
        {
            icon: tick2,
            title: "Out Motto",
            content: "Service to mankind  is service to God",
        },
    ];

    return (
        <div>

            {/* About Section 1  */}
            <section>
                <div className="about-head">
                    <div className="about-head-left">
                        <img className="head" src={Avatar}></img>
                        <div className="green-div">
                            <img className="green" src={GreenBox}></img>
                            <img className="bgs" src={Bgs}></img>
                        </div>
                    </div>
                    <div className="about-head-right">
                        <h3>At Bgs Public</h3>
                        <h2>School</h2>
                        <p>
                            This school is headed by a very highly qualified and experienced
                            Principal who has the support of a team of dedicated, enthusiastic
                            teachers who leave no stone unturned to help the children in their
                            care.
                        </p>
                        <p>
                            At BGS Public School, a sincere effort is made to provide holistic
                            education based on the CBSE curriculam. The school prepares the
                            children to be rooted in the great Indian culture and tradition
                            while preparing them to face the global challenges of the
                            present-day world.
                        </p>
                        <p>
                            The curriculum here is aimed at providing excellent education in scholastic
                            subjects, co-curricular activities, value education, games and sports,
                            yoga, music, art & craft and dance. Equal importance has been laid to
                            develop the rounded personalities of the children through Personality
                            development programmes, emotional and spiritual development, artistic
                            and aesthetic development of the children. A number of opportunities
                            are provided to the children to develop scientific thinking and keep
                            themselves abreast of current events through quizzes and extension
                            lectures.
                        </p>
                    </div>
                </div>
            </section>
            {/* About Section 1 End */}

            {/* About Section 2 */}

            <section>
                <div className='about-sec-2'>
                    <div className="about-section-two">
                        <div className="school-left">
                            <h3>About Bgs</h3>
                            <h3>Public School</h3>
                            <p>
                                BGS Public School which was founded in 2006 by His Holiness Padma
                                Bhushana Jadaguru Sri Sri Sri Balagangadharanatha Swamiji under
                                the aegis of Sri Adichunchangiri Shikshana Trust, is a a
                                co-educational day school. It occupies a prominent place in the 60
                                acres of BGS Health and Education City Campus on Uttarahalli Road,
                                away from the hustle and the bustle of the city but also among the
                                parent community of West and South Bangalore. The school has an
                                excellent infrastructure with spacious and well-ventilated
                                classrooms, pure drinking water facility, library, state of the
                                art computer labs, the laboratories for different.
                            </p>
                        </div>
                        <div className="school-right">
                            <div className="top-img-div">
                                <img src={A} />
                                <img src={a} />
                                <img src={B} />
                                <img src={C} />
                            </div>
                            <div className="green-div-two">
                                <img className="green-two" src={GreenBox}></img>
                                <img className="bgs" src={Bgs}></img>
                                <img className="yellow" src={YellowCircle}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section 2 End */}



            {/* About Section 3 */}

            <section>
                <div className="about-logo-section">
                    <div className="logo-main">
                        <img className="logo-main-img" src={logo_main}></img>
                        <img className="logo-circle" src={logo_circle}></img>
                        <img className="logo-body" src={logo_body}></img>
                    </div>
                </div>
                <Center>
                    <div className='about-logo-content'>
                        <p>
                            The PEACOCK, the TRISHUL and the SUN are the symbols
                            in the design of the Logo which in unity, symbolizes
                            strength and gentleness, pride and humility and the
                            sustenance of life and growth.
                            The design of the logo describes quintessentially in
                            the myriad colors of the PEACOCK, the TRISHUL, ancient
                            weapons of the Gods and the eternal SUN – the Indian
                            ethos blending together its traditions, culture,
                            ideologies and philosophies.
                        </p>
                    </div>
                </Center>
            </section>


            {/* About Section 3 End */}

            {/* Section 4 */}

            <div className="vision-mission-main">
                <div className="vision-mission-flex">
                    {data?.map((item, index) => (
                        <div key={index} className="flex-card">
                            <img src={item.icon} />
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 4 End */}

        </div>
    )
}

export default About
