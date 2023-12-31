import React from 'react'
import "./Sast.css"
import { List, ThemeIcon } from '@mantine/core'
import { CircleCheck } from 'tabler-icons-react'
import BoldSpecificWord from '../../Components/BoldText/BoldSpecificWords'

const Sast = () => {
    window.scroll(0, 0)

    const listTop = [
        `
        Established in 1973, Sri Adichunchanagiri 
        Shikshana Trust® (SAST) is bonded with 
        commitment to excellence, under the 
        stewardship of His Holiness Jagadguru 
        Padmabhushana Dr. Sri Sri Sri Balagangadharanatha 
        Maha Swamiji. Mahaswamiji believed imparting 
        three components of education – intellectual, 
        spiritual & physical needs of students. With 
        this vision, the trust has started 500+ educational 
        units across the country, benefiting more than 
        1,00,000 students every year mainly in the field 
        of Medical, Nursing, Engineering, Management, 
        General Education, Education, Pharmacy, Ayurvedic, 
        etc.`,
        `
        The trust is managed by a board of trustees 
        and the chairman of the trust is the present 
        Chief Pontiff Sri Sri Sri Dr. Nirmalanandanatha 
        Maha Swamiji.`
    ]

    const listBottom = [
        `
        To advance the cause of Education and diffusion 
        of Knowledge without distinction of caste & creeds. `,
        `To Start and run Nursery and primary schools. `,
        `To further advance the cause of education by 
        establishing a rural college for the benefit 
        of the students of the surrounding areas. `,
        `To provide free boarding and lodging for the 
        needy students in the hostel. `,
        `To establish maintain and manage hostels library 
        reading room, gymnasium and playgrounds for the 
        benefit of the students studying in the above Institutions. `,
        `To give loans scholarships and other monetary benefits 
        to the needy students studying in the higher classes. `,
        `To provide medical and health facilities to the people 
        of the area by starting hospitals and dispensaries.`
    ]

    const wordsToBold = [
        'Sri',
        'Adichunchanagiri',
        'Shikshana',
        'Trust®',
        'SAST',
        'Jagadguru',
        'Padmabhushana',
        'Balagangadharanatha',
        'Maha',
        'Swamiji',
        '500+',
    ]
    return (
        <div>
            <div className="sast-page">
                <div className="sast-container">
                    <div className="sast-container-top">
                        <div className="sast-container-top-title">
                            <h1>
                                <span
                                    data-aos="fade-down"
                                    data-aos-delay='100'
                                    data-aos-duration='1000'
                                    data-aos-once="true"
                                >
                                    Sri
                                </span>
                                &nbsp;
                                <span
                                    data-aos="fade-down"
                                    data-aos-delay='300'
                                    data-aos-duration='1000'
                                    data-aos-once="true"
                                >
                                    Adichunchanagiri
                                </span>
                                &nbsp;
                                <span
                                    data-aos="fade-down"
                                    data-aos-delay='500'
                                    data-aos-duration='1000'
                                    data-aos-once="true">
                                    Shikshana
                                </span>
                                &nbsp;
                                <span
                                    data-aos="fade-up"
                                    data-aos-delay='700'
                                    data-aos-duration='1000'
                                    data-aos-once="true"
                                >
                                    Trust®
                                </span>
                            </h1>
                        </div>
                        <div className="sast-container-top-list">
                            <ul>
                                {
                                    listTop?.map((value, index) => {
                                        return (
                                            <li key={index}
                                                data-aos="fade-right"
                                                data-aos-delay={index * 200}
                                                data-aos-duration='1000'
                                                data-aos-easing="linear"
                                                data-aos-once="true"
                                            >
                                                {value}
                                            </li>
                                            // <BoldSpecificWord key={index} text={value} wordsToBold={wordsToBold} />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    {/* Container Bottom */}

                    <div className="sast-container-bottom">
                        <div className="sast-container-bottom-title">
                            <h1>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='100'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    Initially
                                </span>
                                &nbsp;
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='300'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    the
                                </span>
                                &nbsp;
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='500'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    Trust
                                </span>
                                &nbsp;
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='700'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true">
                                    was
                                    formed
                                </span>
                                &nbsp;
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='900'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true">
                                    with the
                                </span>
                                &nbsp;
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='1100'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true">
                                    aim
                                    and
                                </span>
                                &nbsp;
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='1300'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true">
                                    objectives
                                    as
                                    follows:
                                </span>
                            </h1>
                        </div>
                        <div className="sast-container-bottom-list">
                            <List
                                icon={
                                    <ThemeIcon color="teal" size={24} radius="xl">
                                        <CircleCheck size="1rem" />
                                    </ThemeIcon>
                                }>
                                {
                                    listBottom?.map((value, index) => {
                                        return (
                                            <List.Item key={index}
                                                data-aos="fade-right"
                                                data-aos-delay={index * 200}
                                                data-aos-duration='1000'
                                                data-aos-easing="linear"
                                                data-aos-once="true"
                                            >
                                                {value}
                                            </List.Item>
                                        )
                                    })
                                }
                            </List>
                        </div>
                    </div>

                    {/* Container Bottom end */}
                </div>
            </div>
        </div>
    )
}

export default Sast