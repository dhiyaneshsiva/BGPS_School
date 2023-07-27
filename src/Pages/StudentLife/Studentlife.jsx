import React, { useEffect, useRef, useState } from 'react'
import "./Studentlife.css"

// Images
import Grid1 from "../../Assets/school1.png"
import Grid2 from "../../Assets/school2.png"
import Grid3 from "../../Assets/school3.png"
import Grid4 from "../../Assets/school4.png"
import Shadow from "../../Assets/shadow.png"
import StudentAvatar from "../../Assets/student_toy.png"

// Student Gallery Images 
import Student1 from "../../Assets/StudentCouncil/Banner_1.png"
import Student2 from "../../Assets/StudentCouncil/Banner_2.png"
import Student3 from "../../Assets/StudentCouncil/Banner_3.png"
import Student4 from "../../Assets/StudentCouncil/Banner_4.png"
import Student5 from "../../Assets/StudentCouncil/Banner_5.png"


// Student Club Images 
import Banner1 from "../../Assets/Student_club/Banner1.jpg"
import Banner2 from "../../Assets/Student_club/Banner2.jpg"
import Banner3 from "../../Assets/Student_club/Banner3.jpg"
import Banner4 from "../../Assets/Student_club/Banner4.jpg"
import Banner5 from "../../Assets/Student_club/Banner5.jpg"
import Banner6 from "../../Assets/Student_club/Banner6.jpg"
import Banner7 from "../../Assets/Student_club/Banner7.jpg"
import Banner8 from "../../Assets/Student_club/Banner8.jpg"
import Banner9 from "../../Assets/Student_club/Banner9.jpg"
import Banner10 from "../../Assets/Student_club/Banner10.jpg"
import Banner11 from "../../Assets/Student_club/Banner11.jpg"
import Banner12 from "../../Assets/Student_club/Banner12.jpg"

// Mantine UI 
import { Card, Center, Image, Title } from '@mantine/core'

// Vannila Tilt
import VanillaTilt from 'vanilla-tilt';
import SchoolHouse from '../../Components/SchoolHouse/SchoolHouse'
import Studentlife_Comp from '../../Components/StudentLife_Comp/Studentlife_Comp'

const Studentlife = () => {
    // window.scroll(0, 0)

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
            title: 'DIGITAL NATIVES “Technology will drive the change”',
            para: `Coding and computer science are ever-expanding in 
            today’s world. At BGSPS, we teach our students the basic 
            and advanced topics related to coding and computer science 
            to encourage them in their aim of becoming future programmers.
            Video and audio editing, Poster making, Website developing, 
            designing of games, 3D modeling objects and creating 
            animations are some of the software which our students 
            are expertise in. They share the responsibility of 
            working behind the scenes during the special events 
            of the school. `,
            img: Banner1
        },
        {
            title: 'IncrEDIBLES',
            para: `A recipe has no soul. A cook brings soul to the recipe. 
            At the cookery club, we encourage students to explore and research 
            a wide range of dishes and cuisines. We also believe that 
            innovations are always needed to make an impact in this world 
            and ever-ending support is provided to the students to explore 
            their creativity. They actively hone themselves responsible for 
            all the arrangements of refreshments during the school events. `,
            img: Banner2
        },
        {
            title: 'The Symphony',
            para: `Music is the language of the spirit; where words fail, 
            music speaks. Our students of music club are keen and express 
            their enthusiasm towards music – from composing songs to singing 
            it with melody. The students are exposed to showcase their skills 
            in playing a variety of musical instruments – like drums, keyboard, 
            guitar, etc. They also work together in creating their own band. `,
            img: Banner3
        },
        {
            title: 'Footloose ',
            para: `Dance is an art with expression. The students of the dance 
            club are exceptional dancers, with their adorable expressions and 
            rhythmic movements. When they perform, it is not only that the 
            stage is set on fire but even the audience are energized. The
            dance club functions to enhance these dance skills among students. `,
            img: Banner4
        },
        {
            title: 'Sports Ninjas ',
            para: `The Sports club provides an opportunity where through 
            engagement in sport, the members learn leadership, teamwork, 
            problem-solving, responsibility, self-discipline, and a sense 
            of initiative. It enables children to develop skills that will 
            help them in school, in their personal lives and in future careers. 
            The School teams are nurtured with skills that will train them 
            to compete during interschool sports events. `,
            img: Banner5
        },
        {
            title: 'Spectrum Club ',
            para: `Wherever you turn around, you can see an immense number 
            of colors, designs, shapes, and patterns. The Visual Arts club 
            focuses on the development of students in the skills related 
            to drawing, painting, and craft work. They are highly innovative 
            and come up with different kinds of ideas and artwork. They take 
            up the whole and sole responsibility of decoration during the events.`,
            img: Banner6
        },
    ]


    const DataGrid2 = [
        {
            title: 'Number Ninjas',
            para: `This club is comprised of Math enthusiasts who enjoy fun 
            with numbers. The club helps you enrich your math knowledge by 
            solving challenging and fun questions beyond the school curriculum. 
            It provides the students with opportunities to engage themselves 
            in puzzles, conjectures and learn the true beauty of Math. It 
            inculcates the habit of self-study and independent work among 
            the students.`,
            img: Banner7
        },
        {
            title: 'Eco Club',
            para: `The eco club is a forum through which the members have 
            many opportunities to take the lead role on projects while 
            educating the community about the importance of sustainability 
            and taking care of our environment. It aims at inculcating an 
            appreciation of nature and promotes a green lifestyle among the 
            people by making them aware of the importance and necessity of 
            a green environment.`,
            img: Banner8
        },
        {
            title: 'Get Lit ',
            para: `Learning English literature opens a world of inspiration 
            and creativity. The aim of the Literature club is to provide a 
            platform for the students to hone their skills in a play way 
            method. The activities are planned and conducted in such a way 
            that the students feel interested and enthusiastic about them. 
            We ensure that these activities help in enhancing the students’ 
            public speaking and writing skills.`,
            img: Banner9
        },
        {
            title: 'Readers’ Club ',
            para: `“A room without books is a body without a soul.” Indeed, 
            reading books is very much essential for a person to gain 
            knowledge in different aspects. The Readers’ club sessions 
            at BGSPS are conducted in the school library where there is a
            vast collection of books. The students are encouraged to read 
            different varieties of books and write a review after they 
            complete each book in order to help other students who come 
            to the library.   `,
            img: Banner10
        },
        {
            title: 'Picture Perfect ',
            para: `Photography is the art, application, and practice of 
            clicking photos at different angles. The aim of this club is 
            to provide a platform for the interested students to share 
            and exhibit their creativity, knowledge and passion for 
            photography. They get an opportunity to showcase their exhibits,
            meet subject expertise so as to enhance their aesthetic and 
            critical skills in photography. It always paves way to hone 
            their skills by understanding and learning about what makes 
            a good photograph, from composition to artistic expression.  `,
            img: Banner11
        },
        {
            title: 'Fit n Firm',
            para: `The yoga club focusses to develop self-regulation skills 
            which in turn, mitigates stress, thus leading to enhanced attention 
            and learning. It also increase the students’ concentration, 
            flexibility and resilience. `,
            img: Banner12
        },
    ]
    const Student_Council_data = [Student1, Student2, Student3, Student4, Student5]

    return (
        <div>
            <div className="studentlife-page">
                <div className="studentlife-container">

                    {/* Section 1 */}
                    
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
                    
                    {/* Section 1 End */}

                    {/* section 2 */}
                    
                        <SchoolHouse GridData={GridData} />
                    
                    {/* section 2 End */}


                    {/* Section 3 */}
                    
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
                    
                    {/* Section 3 End */}

                    {/* Student Grid Images */}

                    
                        <div className='student-council-image-gallery'>
                            <Center>
                                <Title className='student-council-image-gallery-title'>
                                    The Student Council
                                </Title>
                            </Center>
                            <div className='student-council-image-gallery-grid'>
                                <Studentlife_Comp data={Student_Council_data} />
                            </div>
                        </div>
                    

                    {/* Student Grid Images end */}


                    {/* Student Club  */}

                    
                        <div className='student-club-conatiner'>
                            <div className='student-club-content'>
                                <Center>
                                    <Title className='student-club-conatiner-title'>
                                        School Clubs
                                    </Title>
                                </Center>
                                <p>
                                    School clubs are one of the mechanisms that can
                                    provide spaces for students to participate,
                                    acquire life skills and strengthen their voice
                                    and institutions. Our school clubs provide a
                                    safe space for learners to nurture and develop
                                    life skills to make informed life choices.
                                    Through participating in club activities, the
                                    students learn to prioritize and manage time well,
                                    gain insights into possible career aspirations and
                                    therefore contribute to the overall well-rounded
                                    learning experience both in and outside of school.
                                </p>
                            </div>
                        </div>
                    

                    {/* Student Club End */}

                    {/* section4  */}

                    
                        <div className='student-life-sec-4-container'>
                            <div className='student-life-sec-4-container-grid'>
                                {DataGrid?.map((values, index) => {
                                    return (
                                        <Card
                                            className='student-life-sec-4-container-grid-card'
                                            key={index}>
                                            <Card.Section style={{ borderRadius: "10px" }}>
                                                <Image className='student-life-sec-4-container-grid-card-img' src={values.img} alt='img' />
                                            </Card.Section>
                                            <h1>
                                                {values.title}
                                            </h1>
                                            <p style={{textAlign:"justify"}}>
                                                {values.para}
                                            </p>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    

                    {/* section4 End */}

                    {/* Section 5 */}

                    
                        <div className='student-life-sec-5-container'>
                            <div className='student-life-sec-5-container-grid'>
                                {DataGrid2?.map((values, index) => {
                                    return (
                                        <Card className='student-life-sec-5-container-grid-card' key={index}>
                                            <Card.Section style={{ borderRadius: "10px" }}>
                                                <Image className='student-life-sec-4-container-grid-card-img' src={values?.img} alt='img' />
                                            </Card.Section>
                                            <h1>
                                                {values?.title}
                                            </h1>
                                            <p style={{textAlign:"justify"}}>
                                                {values?.para}
                                            </p>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    

                    {/* Section 5 End */}

                    {/* Section 6  */}

                    {/* 
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
                     */}
                    {/* Section 6 End */}
                </div>
            </div>
        </div>
    )
}

export default Studentlife