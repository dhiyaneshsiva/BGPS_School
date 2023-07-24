import React, { useEffect, useRef, useState } from 'react'
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

// Vannila Tilt
import VanillaTilt from 'vanilla-tilt';
import SchoolHouse from '../../Components/SchoolHouse/SchoolHouse'

const Studentlife = () => {
    window.scroll(0, 0)

    const listNumber = useRef([
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
    ])

    const GridValue1 = useRef([
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
    ])

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

    const [currentNumberList, setCurrentNumberList] = useState(0)
    const [currentGrid1, setcurrentGrid1] = useState(0)


    useEffect(() => {
        VanillaTilt.init(listNumber.current[currentNumberList].current, {
            max: 30,
            speed: 1000,
            scale: 1.2,
            glare: false,
        })
    }, [currentNumberList])
    VanillaTilt.init(GridValue1.current[currentGrid1].current, {
        max: 30,
        speed: 1000,
        scale: 1.2,
        glare: false,
    })
    const GridData = [
        {
            title: 'Air',
            para: `It depicts commitment, strength and bravery, which inculcates in students that they should not fear any given situation in life and should face all the situation upfront and with utmost bravery.`,
            icon: Grid1
        },
        {
            title: 'Water',
            para: `It depicts the infinite and the immeasurable. The values given here are that the students have unlimited and vast opportunities in life and should strive towards progress.`,
            icon: Grid2
        },
        {
            title: 'Earth',
            para: `It depicts happiness, peace and harmony which imbibes in students to do all the given duties with harmony and should not deceive anybody in life.`,
            icon: Grid3
        },
        {
            title: 'Fire',
            para: `It depicts purity and victory, The values given here are that students should have a competitive spirit and should try and win all the tasks given to them. Like they should have a competitive spirit in life. `,
            icon: Grid4
        },
    ]

    const DataGrid = [
        {
            title: 'DIGITAL NATIVES',
            para: `It depicts commitment, 
            strength and bravery, which 
            inculcates in students that 
            they should not fear any given 
            situation in life and should 
            face all the situation upfront 
            and with utmost bravery.`
        },
        {
            title: 'Incredibles',
            para: `It depicts commitment, 
            strength and bravery, which 
            inculcates in students that 
            they should not fear any given 
            situation in life and should 
            face all the situation upfront 
            and with utmost bravery.`
        },
        {
            title: 'DIGITAL NATIVES',
            para: `It depicts commitment, 
            strength and bravery, which 
            inculcates in students that 
            they should not fear any given 
            situation in life and should 
            face all the situation upfront 
            and with utmost bravery.`
        },
        {
            title: 'Incredibles',
            para: `It depicts commitment, 
            strength and bravery, which 
            inculcates in students that 
            they should not fear any given 
            situation in life and should 
            face all the situation upfront 
            and with utmost bravery.`
        },
        {
            title: 'DIGITAL NATIVES',
            para: `It depicts commitment, 
            strength and bravery, which 
            inculcates in students that 
            they should not fear any given 
            situation in life and should 
            face all the situation upfront 
            and with utmost bravery.`
        },
        {
            title: 'Incredibles',
            para: `It depicts commitment, 
            strength and bravery, which 
            inculcates in students that 
            they should not fear any given 
            situation in life and should 
            face all the situation upfront 
            and with utmost bravery.`
        },
        {
            title: 'DIGITAL NATIVES',
            para: `It depicts commitment, 
            strength and bravery, which 
            inculcates in students that 
            they should not fear any given 
            situation in life and should 
            face all the situation upfront 
            and with utmost bravery.`
        },
        {
            title: 'Incredibles',
            para: `It depicts commitment, 
            strength and bravery, which 
            inculcates in students that 
            they should not fear any given 
            situation in life and should 
            face all the situation upfront 
            and with utmost bravery.`
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
                                        list?.map((value, index) => {
                                            return (
                                                <li key={index}
                                                    ref={listNumber.current[index]}
                                                    onMouseOver={() => setCurrentNumberList(index)}>
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
                        <SchoolHouse GridData={GridData} />
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

                    {/* section4  */}

                    <section>
                        <div className='student-life-sec-4-container'>
                            <div className='student-life-sec-4-container-grid'>
                                {DataGrid?.map((values, index) => {
                                    return (
                                        <Card
                                            // ref={GridValue1.current[index]}
                                            // onMouseOver={() => setcurrentGrid1(index)}
                                            className='student-life-sec-4-container-grid-card'
                                            key={index}>
                                            <h1>
                                                {values.title}
                                            </h1>
                                            <p>
                                                {values.para}
                                            </p>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    </section>

                    {/* section4 End */}

                    {/* Section 5 */}

                    <section>
                        <div className='student-life-sec-5-container'>
                            <div className='student-life-sec-5-container-grid'>
                                {DataGrid?.map((values, index) => {
                                    return (
                                        <Card className='student-life-sec-5-container-grid-card' key={index}>
                                            <h1>
                                                {values.title}
                                            </h1>
                                            <p>
                                                {values.para}
                                            </p>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Section 5 End */}

                    {/* Section 6  */}

                    <section>
                        <div className='student-life-sec-6-container'>
                            <div className='student-life-sec-6-content'>
                                <h1> School Teams</h1>
                                <p>
                                    Our Admissions team will ensure the
                                    smoothest possible transition for your family.
                                    Kindly refer to the age-matrix for admission.
                                    This matrix is created as per the National Educational
                                    Policy and the circular issued by the Karnataka
                                    State Board of Education. (Click Age-matrix circular-2023-24.pdf for the circular)
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* Section 6 End */}
                </div>
            </div>
        </div>
    )
}

export default Studentlife