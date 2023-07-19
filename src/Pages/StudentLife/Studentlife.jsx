import React from 'react'
import "./Studentlife.css"

// Images
import Grid1 from "../../Assets/school1.png"
import Grid2 from "../../Assets/school2.png"
import Grid3 from "../../Assets/school3.png"
import Grid4 from "../../Assets/school4.png"
import Shadow from "../../Assets/shadow.png"
import StudentAvatar from "../../Assets/student_toy.png"

// Mantine UI 
import { Card } from '@mantine/core'

const Studentlife = () => {

    const list = [
        {
            title: '1',
            nameValue: 'School Houses'
        },
        {
            title: '2',
            nameValue: 'School Clubs'
        },
        {
            title: '3',
            nameValue: 'School Houses'
        },
        {
            title: '4',
            nameValue: 'School Houses'
        },
    ]


    const GridData = [
        {
            title: 'Air',
            para: `It depicts commitment, 
            strength and bravery, which 
            inculcates in students that 
            they should not fear any given 
            situation in life and should 
            face all the situation upfront 
            and with utmost bravery.`,
            icon: Grid1
        },
        {
            title: 'Water',
            para: `It depicts commitment, 
            strength and bravery, which 
            inculcates in students that 
            they should not fear any given 
            situation in life and should 
            face all the situation upfront 
            and with utmost bravery.`,
            icon: Grid2
        },
        {
            title: 'Earth',
            para: `It depicts commitment, 
            strength and bravery, which 
            inculcates in students that 
            they should not fear any given 
            situation in life and should 
            face all the situation upfront 
            and with utmost bravery.`,
            icon: Grid3
        },
        {
            title: 'Fire',
            para: `It depicts commitment, 
            strength and bravery, which 
            inculcates in students that 
            they should not fear any given 
            situation in life and should 
            face all the situation upfront 
            and with utmost bravery.`,
            icon: Grid4
        },
    ]
    return (
        <div>
            <div className="studentlife-page">
                <div className="studentlife-container">

                    {/* Section 1 */}
                    <section>
                        <div className="studentlife-container-top">
                            <div className="studentlife-container-top-div1">
                                <h1>
                                    Student Life
                                </h1>
                                <p>
                                    Skills like teamwork, leadership, patience,
                                    discipline, learning from failure, Sportsmanship,
                                    etc., are developed only when children play sports
                                    regularly, and these skills are equally important
                                    when it comes to studies and management.
                                </p>
                            </div>
                            <div className="studentlife-container-top-div2">
                                <ul>
                                    {
                                        list.map((value, index) => {
                                            return (
                                                <li key={index}>
                                                    <h2>
                                                        {value.title}
                                                    </h2>
                                                    <p>
                                                        {value.nameValue}
                                                    </p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* Section 1 End */}

                    {/* section 2 */}
                    <section>
                        <div className="student-life-sec-2-grid">
                            <h1>School Houses</h1>
                            <div className="student-life-sec-2-grid-card-container">
                                {
                                    GridData.map((value, index) => {
                                        return (
                                            <Card key={index} className='student-life-sec-2-grid-cards'>
                                                <Card.Section className='grid-image'>
                                                    <img src={value.icon} alt="Grid-Image" />
                                                </Card.Section>
                                                <h2>
                                                    {value.title}
                                                </h2>
                                                <p>
                                                    {value.para}
                                                </p>
                                            </Card>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                    {/* section 2 End */}


                    {/* Section 3 */}
                    <section>
                        <div className="student-life-sec-3-container">
                            <div className="student-life-sec-3-container-left">
                                <h1>
                                    Student Council
                                </h1>
                                <p>
                                    The Student Council at our school
                                    aims at giving students an opportunity
                                    to develop their leadership skills by
                                    organizing and carrying out school
                                    activities and service projects. In
                                    addition to planning events that contribute
                                    to school spirit and community welfare,
                                    the student council is the voice of the
                                    student body. They help in sharing student
                                    ideas, interests or concerns in order to
                                    undertake initiatives for the benefit of
                                    the school wide community.
                                </p>
                                <p>
                                    This council works together with an adult
                                    advisor within the framework of the organization
                                    and follows all the processes that promote
                                    the aims and objectives of the school.
                                </p>
                            </div>
                            <img src={Shadow} alt="shadow" className="shadow" />
                            <img src={StudentAvatar} alt="StudentAvatar" className='StudentAvatar' />
                        </div>
                    </section>
                    {/* Section 3 End */}
                </div>
            </div>
        </div>
    )
}

export default Studentlife