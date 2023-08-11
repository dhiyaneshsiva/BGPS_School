import React from 'react'
import "./About_Founder.css"

// Images 
import Founder1 from "../../Assets/profiletwo.png"
import Founder2 from "../../Assets/profilethree.png"
import Founder3 from "../../Assets/profileone.png"
import { useEffect } from 'react'

const AboutFounder = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const List = [
        `
        On 24 Sept 1974 he became the 71st
        pontiff of the Adichunchanagiri Dharma
        Peetha and worked tirelessly to realize
        his vision of revolutionizing Society
        through Spiritual, Educational, Social,
        Cultural activities of the Mutt. He
        travelled all around the world understanding
        the needs of the people.
        `,
        `
        His Holiness was truly an enlightened
        and realized soul for he treated all
        the people alike, without discriminating
        based on caste, creed, sex or status. His
        approach towards handling different
        problems was truly scientific and logical.
        `,
        `
        This led to the establishment of Sri
        Adichunchanagiri Shikshana Trust.  At
        present nearly 500 such institutions
        are functioning across the Nation aiding
        the Government in educating the rural and
        semi-rural children. Also, Mahaswamiji has
        made free boarding and lodging facilities
        for Civil services aspirants in the
        premises of the Mutt in Bangalore.
        `,
        `
        Sri Sri Sri Dr. Balagangadharanatha
                                Mahaswamiji not only emphasized modern
                                system of Education but also advocated
                                traditional teaching system.  It is the
                                collective responsibility of the community
                                to continue and preserve the devoted
                                services of His Holiness Jagadguru Sri
                                Sri Sri Dr. Balagangadharanatha Mahaswamiji,
                                during whose era the Mutt reached the maximum
                                grandeur. The consistent efforts of this 71st
                                pontiff should be ideal for the forthcoming
                                successors to work for Humanity selflessly
                                and exhibit more zeal than before in achieving
                                the dreams and visions of the former come to
                                reality.
        `
    ]

    const Founders = [
        {
            title: `Bhairavaikya  His Holiness Jagadguru 
            Sri  Sri  Sri Dr. Balagangadharanatha 
            Mahaswamiji   (1954-2013) `,
            icon: Founder1
        },
        {
            title: `Sri Sri Sri Dr. Nirmalanandanatha Mahaswamiji, President, Adichunchanagiri Shikshana Trust`,
            icon: Founder2
        },
        {
            title: `Sri Sri Dr. Prakashnatha Swamiji, Managing Director, BGS Group of Institutions and Hospitals`,
            icon: Founder3
        },
    ]
    return (
        <div>
            <div className="about-founder-page">
                <div className="about-founder-container">
                    <div className="about-founder-container-top">
                        <h2
                            data-aos="fade-down"
                            data-aos-delay='100'
                            data-aos-duration='1000'
                            data-aos-easing="linear"
                            data-aos-once="true">
                            Message From The Management Members
                        </h2>
                        <ul>
                            {
                                List?.map((value, index) => {
                                    const aosConfig = {
                                        delay: index * 200
                                    }
                                    return (
                                        <li
                                            key={index}
                                            data-aos="fade-right"
                                            data-aos-delay={aosConfig.delay}
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
                    <div className="about-founder-container-bottom">
                        <h1
                            data-aos="fade-down"
                            data-aos-delay='100'
                            data-aos-duration='1000'
                            data-aos-easing="linear"
                            data-aos-once="true"
                        >
                            About the Founder
                        </h1>
                        <div className="about-founder-container-bottom-grid">
                            {
                                Founders?.map((value, index) => {
                                    return (
                                        <div
                                            data-aos="fade-up"
                                            data-aos-delay={`${index * 200}`}
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true"
                                            key={index} className="about-founder-container-bottom-grid-box">
                                            <div className="about-founder-container-bottom-grid-box-img">
                                                <img src={value.icon} alt="Founders" />
                                            </div>
                                            <p>
                                                {value.title}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutFounder