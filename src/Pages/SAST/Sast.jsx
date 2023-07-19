import React from 'react'
import "./Sast.css"

const Sast = () => {

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
    return (
        <div>
            <div className="sast-page">
                <div className="sast-container">
                    <div className="sast-container-top">
                        <div className="sast-container-top-title">
                            <h1>
                                Sri Adichunchanagiri
                                Shikshana Trust®
                            </h1>
                        </div>
                        <div className="sast-container-top-list">
                            <ul>
                                {
                                    listTop.map((value, index) => {
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

                    {/* Container Bottom */}

                    <div className="sast-container-bottom">
                        <div className="sast-container-bottom-title">
                            <h1>
                                Initially the Trust was formed with the aim and objectives as follows:
                            </h1>
                        </div>
                        <div className="sast-container-bottom-list">
                            <ul>
                                {
                                    listBottom.map((value, index) => {
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

                    {/* Container Bottom end */}
                </div>
            </div>
        </div>
    )
}

export default Sast