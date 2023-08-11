import React, { useEffect } from 'react'
import "./SchoolZones.css"
import { Link } from "react-router-dom"

// Images
import Avatar1 from "../../Assets/curricular_left.png"
import Rocket from "../../Assets/zone_top.png"
import Clock from "../../Assets/timing.png"
import Nife from "../../Assets/right-icon.png"
import Key from "../../Assets/Key.png"
import Camera from "../../Assets/camera.png"
import Shield from "../../Assets/shield.png"
import GreenCheck from "../../Assets/green-tick.png"

// Nuture Modal Images
import Image1 from "../../Assets/NurtureCareer/1.jpg"
import Image2 from "../../Assets/NurtureCareer/2.jpg"
import Image3 from "../../Assets/NurtureCareer/3.jpg"
import Image4 from "../../Assets/NurtureCareer/4.jpg"
import Image5 from "../../Assets/NurtureCareer/5.jpg"
import Image6 from "../../Assets/NurtureCareer/6.jpg"
import Image7 from "../../Assets/NurtureCareer/7.jpg"

// Tabler iCON 
import { Checks } from 'tabler-icons-react';
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

// Mantine UI
import { Carousel } from '@mantine/carousel';

const SchoolZones = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const ListData = [
        `Classrooms`,
        `Library`,
        `Playground`,
        `IT LAB`,
        `Laboratory`,
        `Art & Craft`,
    ]
    const ListData2 = [
        `Health Education Programme`,
        `Infirmary `,
        `School Wellness Centre`,
        `School Counsellor `
    ]
    const SecurityList = [
        `CCTV cameras are installed at all vantage points on the school campus.  This is monitored by the Principal and the Administrative staff. `,
        `All gates close after the morning bell and open only after the evening bell.  `,
        `All our staff members have been doubly vaccinated. `,
        `Parents or visitors are not permitted to park their vehicles inside the school premises.  A separate area opposite the school building is provided during their visits to the school.  `,
        `Well-trained guards are deployed to manage the safety and security of the staff and students in the school. `,
        `The entry and exit of visitors are monitored regularly and no outsiders are allowed to enter the classroom during school hours. `,
    ]


    // Modal
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div>
            <Modal size={'100%'} h={'100%'}
                title='NURTURE – CAREER GUIDANCE PROGRAMME'
                opened={opened}
                onClose={close} centered>
                <Carousel className='schoolzones-page-carousel' mih={'100%'}
                    mx="auto"
                    withIndicators
                    loop dragFree>
                    <Carousel.Slide className='schoolzones-page-carousel-slide'>
                        <img src={Image1} alt="img" />
                    </Carousel.Slide>
                    <Carousel.Slide className='schoolzones-page-carousel-slide'>
                        <img src={Image2} alt="img" />
                    </Carousel.Slide>
                    <Carousel.Slide className='schoolzones-page-carousel-slide'>
                        <img src={Image3} alt="img" />
                    </Carousel.Slide>
                    <Carousel.Slide className='schoolzones-page-carousel-slide'>
                        <img src={Image4} alt="img" />
                    </Carousel.Slide>
                    <Carousel.Slide className='schoolzones-page-carousel-slide'>
                        <img src={Image5} alt="img" />
                    </Carousel.Slide>
                    <Carousel.Slide className='schoolzones-page-carousel-slide'>
                        <img src={Image6} alt="img" />
                    </Carousel.Slide>
                    <Carousel.Slide className='schoolzones-page-carousel-slide'>
                        <img src={Image7} alt="img" />
                    </Carousel.Slide>
                    {/* ...other slides */}
                </Carousel>
            </Modal>
            <div className="schoolzones-page">
                {/* Section1 */}
                <div className="schoolzones-sec1-container">
                    <div className="schoolzones-sec1-content">
                        <div className="schoolzones-sec1-content-title">
                            <h2>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='100'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    s
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='300'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    c
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='500'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    h
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='700'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    o
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='900'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    o
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='1100'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    l
                                </span>
                                {/* School */}
                            </h2>
                            <h1>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='1300'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    z
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='1500'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    o
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='1700'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    n
                                </span>
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay='1900'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    e
                                </span>
                            </h1>
                        </div>
                        <div className="schoolzones-sec1-content-para">
                            <p
                                data-aos="fade-left"
                                data-aos-delay='2100'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true"
                            >
                                Skills like teamwork, leadership, patience,
                                discipline, learning from failure, Sportsmanship,
                                etc., are developed only when children play sports
                                regularly, and these skills are equally important
                                when it comes to studies and management.
                            </p>
                        </div>
                    </div>
                    <img src={Avatar1} alt="Avatar" className="schoolzones-sec1-avatar" />
                    <img src={Rocket} alt="Rocket" className="schoolzones-sec1-rocket" />
                </div>
                {/* Section1 End */}

                {/* Section2 */}
                <div className="schoolzones-sec2-container">
                    <div className="schoolzones-sec2-content">
                        <div className="schoolzones-sec2-content-left">
                            <div className="schoolzones-sec2-content-left-title">
                                <h1 style={{ textTransform: "uppercase" }}>
                                    <span
                                        data-aos="fade-right"
                                        data-aos-delay='100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        f
                                    </span>
                                    <span
                                        data-aos="fade-right"
                                        data-aos-delay='300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        a
                                    </span>
                                    <span
                                        data-aos="fade-right"
                                        data-aos-delay='500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        c
                                    </span>
                                    <span
                                        data-aos="fade-right"
                                        data-aos-delay='700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        i
                                    </span>
                                    <span
                                        data-aos="fade-right"
                                        data-aos-delay='900'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        l
                                    </span>
                                    <span
                                        data-aos="fade-right"
                                        data-aos-delay='1100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        i
                                    </span>
                                    <span
                                        data-aos="fade-right"
                                        data-aos-delay='1300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        t
                                    </span>
                                    <span
                                        data-aos="fade-right"
                                        data-aos-delay='1500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        i
                                    </span>
                                    <span
                                        data-aos="fade-right"
                                        data-aos-delay='1700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        e
                                    </span>
                                    <span
                                        data-aos="fade-right"
                                        data-aos-delay='1900'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        s
                                    </span>
                                    {/* Facilities */}
                                </h1>
                            </div>
                            <div className="schoolzones-sec2-content-left-para">
                                <p
                                    data-aos="fade-right"
                                    data-aos-delay='100'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true">
                                    The Student Council at our school aims at giving students
                                    an opportunity to develop their leadership skills by
                                    organizing and carrying out school activities and service
                                    projects. In addition to planning events that contribute
                                    to school spirit and community welfare, the student council
                                    is the voice of the student body. They help in sharing student
                                    ideas, interests or concerns in order to undertake initiatives
                                    for the benefit of the school wide community.
                                </p>
                                <p
                                    data-aos="fade-right"
                                    data-aos-delay='300'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true">
                                    This council works together with an adult advisor within the
                                    framework of the organization and follows all the processes
                                    that promote the aims and objectives of the school.
                                </p>
                            </div>
                            <Link to="/facilities" >
                                See More
                            </Link>
                        </div>
                        <div className="schoolzones-sec2-content-right">
                            <div className="schoolzones-sec2-content-right-list">
                                <ul>
                                    {
                                        ListData.map((value, index) => {
                                            return (
                                                <li
                                                    data-aos="fade-left"
                                                    data-aos-delay={index * 200}
                                                    data-aos-duration='1000'
                                                    data-aos-easing="linear"
                                                    data-aos-once="true"
                                                    key={index}>
                                                    <Checks
                                                        size={25}
                                                        strokeWidth={2}
                                                        color={'#BFD2F2'}
                                                    />
                                                    {value}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section2 End */}


                {/* Section3 */}
                <div className="schoolzones-sec3-container">
                    <div className="schoolzones-sec3-content">
                        <div className="schoolzones-sec3-content-left">
                            {/* pink Side */}
                        </div>
                        <div className="schoolzones-sec3-content-right">
                            <div className="schoolzones-sec3-content-right-title">
                                <h1
                                    data-aos="zoom-in"
                                    data-aos-delay='100'
                                    data-aos-duration='1000'
                                    data-aos-once="true">
                                    School
                                </h1>
                                <h1
                                    data-aos="zoom-in"
                                    data-aos-delay='300'
                                    data-aos-duration='1000'
                                    data-aos-once="true">
                                    Timings
                                </h1>
                            </div>
                            <div className="schoolzones-sec3-content-right-para">
                                <p
                                    data-aos="zoom-in"
                                    data-aos-delay='500'
                                    data-aos-duration='1000'
                                    data-aos-once="true">
                                    The school remains closed to students on
                                    all Second and Third Saturdays. However,
                                    the office is open on Second Saturdays.
                                </p>
                            </div>
                            <img src={Nife} alt="Nife" className='schoolzones-sec3-content-right-nife' />
                        </div>
                        <img src={Clock} alt="Clock" className="schoolzones-sec3-content-image" />
                    </div>
                </div>
                {/* Section3 End */}


                {/* Sec4 */}
                <div className='guideline-sec-3-container'>
                    <div className='guideline-sec-3-div'>
                        <div className='guideline-sec-3-div-hover-img1'>
                            <div className='schoolzones-sec-4-div-hover-img1-content'>
                                <h1
                                    data-aos="fade-right"
                                    data-aos-delay='100'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true">
                                    Grades
                                </h1>
                                <ul>
                                    <li
                                        data-aos="fade-right"
                                        data-aos-delay='300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true">
                                        Kindergarten
                                    </li>
                                    <li
                                        data-aos="fade-right"
                                        data-aos-delay='500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true">
                                        I to V
                                    </li>
                                    <li
                                        data-aos="fade-right"
                                        data-aos-delay='700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true">
                                        VI to XII
                                    </li>
                                </ul>
                            </div>
                            {/* <img src={Hands} alt='Hand' className='hand' /> */}
                        </div>
                        <div className='guideline-sec-3-div-hover-img2'>
                            <div className='schoolzones-sec-4-div-hover-img2-content'>
                                <h1
                                    data-aos="zoom-in"
                                    data-aos-delay='100'
                                    data-aos-duration='1000'
                                    data-aos-once="true">
                                    Monday to Friday
                                </h1>
                                <ul>
                                    <li
                                        data-aos="zoom-in"
                                        data-aos-delay='300'
                                        data-aos-duration='1000'
                                        data-aos-once="true">
                                        8:15 am to 12:30 pm
                                    </li>
                                    <li
                                        data-aos="zoom-in"
                                        data-aos-delay='500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true">
                                        8:15 am to 03:15 pm
                                    </li>
                                    <li
                                        data-aos="zoom-in"
                                        data-aos-delay='700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true">
                                        8:15 am to 03:15 pm
                                    </li>
                                </ul>
                            </div>
                            {/* <img src={Badge} alt='Hand' className='guideline-sec-3-div-hover-img2-badge' /> */}
                        </div>
                        <div className='guideline-sec-3-div-hover-img3'>
                            <div className='schoolzones-sec-4-div-hover-img3-content' >
                                <h1
                                    data-aos="fade-left"
                                    data-aos-delay='100'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true">
                                    Working Saturday
                                </h1>
                                <ul>
                                    <li
                                        data-aos="fade-left"
                                        data-aos-delay='300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true">
                                        NA
                                    </li>
                                    <li
                                        data-aos="fade-left"
                                        data-aos-delay='500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true">
                                        NA
                                    </li>
                                    <li
                                        data-aos="fade-left"
                                        data-aos-delay='700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true">
                                        8:15 am to 12:30 pm
                                    </li>
                                </ul>
                            </div>
                            {/* <img src={Calender} alt='Hand' className='guideline-sec-3-div-hover-img3-calender' /> */}
                        </div>
                    </div>
                    <p
                        data-aos="zoom-in"
                        data-aos-delay='500'
                        data-aos-duration='1000'
                        data-aos-once="true"
                        className='guideline-sec-3-container-para'>
                        The school remains closed to students on
                        all Second and Third Saturdays. However,
                        the office is open on Second Saturdays.
                    </p>
                </div>
                {/* Sec4 End */}

                {/* Sec5  */}
                <div className="schoolzones-sec5-container">
                    <div className="schoolzones-sec5-content">
                        <div className="schoolzones-sec5-content-left">
                            <div className="schoolzones-sec5-content-left-title">
                                <h1
                                    data-aos="fade-right"
                                    data-aos-delay='100'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    Student
                                </h1>
                                <h1
                                    data-aos="fade-right"
                                    data-aos-delay='300'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    Well-Being
                                </h1>
                            </div>
                            <div className="schoolzones-sec5-content-left-para">
                                <p
                                    data-aos="fade-right"
                                    data-aos-delay='500'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    Health Education is given equal importance
                                    alongside the curriculum. It instills skills,
                                    knowledge, and a positive attitude in students.
                                    The Health Education curriculum focuses on Emotional
                                    health, Social Health, Physical Health and Mental
                                    Health. Following the guidelines of World Health
                                    Organization, the health programme prevents major
                                    health risks among the students and to engage the
                                    education sector in efforts to change the educational,
                                    social and economic, and political conditions that
                                    affect risk.
                                </p>
                            </div>
                            <Link
                                data-aos="zoom-in"
                                data-aos-delay='700'
                                data-aos-duration='1000'
                                data-aos-once="true"
                                to="/wellbeing">
                                See More
                            </Link>
                        </div>
                        <div className="schoolzones-sec5-content-right">
                            <div className="schoolzones-sec5-content-right-list">
                                <ul>
                                    {ListData2.map((value, index) => {
                                        return (
                                            <li key={index}
                                                data-aos="fade-left"
                                                data-aos-delay={index * 200}
                                                data-aos-duration='1000'
                                                data-aos-easing="linear"
                                                data-aos-once="true"
                                            >
                                                <Checks
                                                    size={25}
                                                    strokeWidth={2}
                                                    color={'#BFD2F2'}
                                                />
                                                {value}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sec5 End */}

                {/* Sec6 */}
                <div className="schoolzones-sec6-container">
                    <div className="schoolzones-sec6-content">
                        <div className="schoolzones-sec6-content-title">
                            <h1
                                data-aos="fade-right"
                                data-aos-delay='100'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true"
                            >
                                Nurture – Career Guidance
                                Programme
                            </h1>
                        </div>
                        <div className="schoolzones-sec6-content-para">
                            <p
                                data-aos="fade-right"
                                data-aos-delay='300'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true">
                                Nurture is the Career Guidance programme
                                provided for our students of Grades IX to
                                XII to help them to know and understand
                                themselves and the world of work in order
                                to make their career, educational, and life
                                decisions. This programme helps them analyze
                                their strengths and weaknesses and helps in
                                finding the perfect career path.
                            </p>
                            <p
                                data-aos="fade-right"
                                data-aos-delay='500'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true"
                            >
                                Nurture is the Career Guidance programme
                                provided for our students of Grades IX to
                                XII to help them to know and understand
                                themselves and the world of work in order
                                to make their career, educational, and life
                                decisions. This programme helps them analyze
                                their strengths and weaknesses and helps in
                                finding the perfect career path.
                            </p>
                        </div>
                    </div>
                    <p
                        onClick={open}
                        opened={opened} onClose={close}
                        style={{ textDecoration: "underline", color: "blue" }}>
                        Event Gallery
                    </p>
                </div>
                {/* Sec6 End */}


                {/* Sec7 */}
                <div className="schoolzones-sec7-container">
                    <div className="schoolzones-sec7-content">
                        <div className="schoolzones-sec7-content-left">
                            <img src={Camera} alt="Camera" className="schoolzones-sec7-content-left-camera" />
                            <img src={Shield} alt="Shield" className="schoolzones-sec7-content-left-shield" />
                            <div className="schoolzones-sec7-content-left-content">
                                <img src={GreenCheck} alt="Green-Check" className="schoolzones-sec7-content-left-greencheck" />
                                <p
                                    data-aos="zoom-in"
                                    data-aos-delay='100'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true"
                                >
                                    CCTV cameras are installed at all vantage
                                    points on the school campus.  This is
                                    monitored by the Principal and the
                                    Administrative staff.
                                </p>
                            </div>
                        </div>
                        <div className="schoolzones-sec7-content-right">
                            <div className="schoolzones-sec7-content-right-title">
                                <h1
                                    data-aos="zoom-in"
                                    data-aos-delay='300'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true">
                                    Safety And
                                </h1>
                                <h1
                                    data-aos="zoom-in"
                                    data-aos-delay='500'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true">
                                    Security
                                </h1>
                            </div>
                            <div className="schoolzones-sec7-content-right-para">
                                <ul>
                                    {
                                        SecurityList.map((value, index) => {
                                            return (
                                                <li
                                                    data-aos="fade-left"
                                                    data-aos-delay={index * 200}
                                                    data-aos-duration='1000'
                                                    data-aos-easing="linear"
                                                    data-aos-once="true"
                                                    key={index}>
                                                    {value}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <img src={Key} alt="Key" className="schoolzones-sec7-container-image" />
                </div>
                {/* Sec7 End */}


                {/*Sec8*/}
                <div className="schoolzones-sec8-container">
                    <div className="schoolzones-sec8-content">
                        <div className="schoolzones-sec8-content-title">
                            <h1
                                data-aos="fade-right"
                                data-aos-delay='100'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true"
                            >
                                Transportation
                            </h1>
                        </div>
                        <div className="schoolzones-sec8-content-para">
                            <p
                                data-aos="fade-right"
                                data-aos-delay='300'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true">
                                Nurture is the Career Guidance programme
                                provided for our students of Grades IX to
                                XII to help them to know and understand
                                themselves and the world of work in order
                                to make their career, educational, and
                                life decisions. This programme helps them
                                analyze their strengths and weaknesses and
                                helps in finding the perfect career path.
                            </p>
                        </div>
                        <a
                            data-aos="fade-right"
                            data-aos-delay='500'
                            data-aos-duration='1000'
                            data-aos-easing="linear"
                            data-aos-once="true"
                            href="http://bgspskengeri.edu.in/wp-content/uploads/2022/10/BGSPS-BUS-ROUTE.pdf">
                            Click here to view the Transportation route details.
                        </a>
                    </div>
                </div>
                {/*Sec8 End*/}
            </div>
        </div>
    )
}

export default SchoolZones