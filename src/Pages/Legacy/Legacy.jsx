import React from 'react'
import "./Legacy.css"

// Images
import peacock from "../../Assets/top_right.png"
import { useEffect } from 'react'

const Legacy = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const LinkList = [
        {
            title: `BGS GLOBAL INSTITUTE OF MEDICAL SCIENCES`,
            link: `http://bgsgims.edu.in/`
        },
        {
            title: `SJB INSTITUTE OF TECHNOLOGY`,
            link: `https://sjbit.edu.in/`
        },
        {
            title: `SJB SCHOOL OF ARCHITECTURE AND PLANNING`,
            link: `https://sjbsap.edu.in/`
        },
        {
            title: `BGS SCHOOL OF ARCHITECTURE AND PLANNING`,
            link: `https://bgssap.edu.in/`
        },
        {
            title: `SJB COLLEGE OF MANAGEMENT STUDIES`,
            link: `http://sjbcms.edu.in/`
        },
        {
            title: `SJB COLLEGE OF NURSING`,
            link: `http://www.sjbcon.ac.in/`
        },
        {
            title: `BGS NATIONAL PUBLIC SCHOOL, HULIMAVU`,
            link: `http://bgsnps.edu.in/`
        },
        {
            title: `BGS NATIONAL PUBLIC SCHOOL, BANNERGHATTA`,
            link: `https://bannerghatta.bgsnps.edu.in/`
        },
        {
            title: `BGS INTERNATIONAL RESIDENTIAL SCHOOL`,
            link: `https://bgsirs.edu.in/`
        },
        {
            title: `BGS INTERNATIONAL PUBLIC SCHOOL`,
            link: `https://bgsips.net/`
        },
        {
            title: `BGS INTERNATIONAL ACADEMIA SCHOOL`,
            link: `http://bgsias.school/`
        },
        {
            title: `BGS PU COLLEGE`,
            link: `https://bgspuc.edu.in/`
        },
        {
            title: `BGS INSTITUTE OF HOTEL MANAGEMENT`,
            link: `http://bgsihm.org/`
        },
        {
            title: `SJB COLLEGE OF EDUCATION`,
            link: `http://www.sjbcoe.edu.in/`
        },
        {
            title: `SJB COLLEGE OF FASHION AND APPAREL DESIGN`,
            link: `https://bgsgroup.org/sjb-college-of-fashion-and-apparel-design/`
        },
        {
            title: `SJB SCHOOL OF DESIGN`,
            link: `https://bgsgroup.org/sjb-school-of-design/`
        },
    ]
    return (
        <div>
            <div className='legacy-page'>
                {/* sec 1 */}
                <div>
                    <div className='legacy-sec1'>
                        <div className='legacy-sec1-container'>
                            <div className='legacy-sec1-container-header'>
                                <div className='legacy-sec1-container-header-title'>
                                    <h1>
                                        Legacy
                                    </h1>
                                </div>
                                <div className='legacy-sec1-container-header-para'>
                                    <p>
                                        <strong style={{ fontSize: "25px" }}> BGS & SJB Group of Institutions </strong> are leading
                                        education institutions across the nation.
                                        It has a legacy of more than 40 decades with
                                        500 education institutions under its banner
                                        and is run by Sri Adichunchanagiri Shikshana
                                        Trust®.
                                    </p>
                                    <p>
                                        <strong style={{ fontSize: "25px" }}>BGS & SJB Group </strong> has laid considerable emphasis
                                        on imparting quality education, cutting across
                                        professional and general institutions.
                                        All its institutions have a reputation for their
                                        unwavering commitment to excellence and expanding
                                        the horizons of knowledge.
                                    </p>
                                    <p>
                                        The institutions run by Sri Adichunchanagiri Shikshana Trust®
                                        include Public, National and International schools, PU
                                        Colleges, Autonomous Arts, Science & Commerce Degree
                                        Colleges, and professional institutions such as College
                                        of Education, Engineering College, School of Design,
                                        Medical College, Business Schools and Nursing College.
                                        All <strong style={{ fontSize: "25px" }}> BGS & SJB </strong>institutions offer education to students
                                        without discrimination based on sect, caste, religion
                                        and creed.
                                    </p>
                                </div>
                                <img src={peacock} alt='Peacock' className='legacy-sec1-container-header-image' />
                            </div>
                        </div>
                        {/* Div2 */}
                        <div className='legacy-sec1-div2'>
                            <div className='legacy-sec1-div2-container'>
                                <div className='legacy-sec1-div2-container-left'>
                                    <div className='legacy-sec1-div2-container-left-title'>
                                        <h1>
                                            About BGS Group of Schools
                                        </h1>
                                    </div>
                                    <div className='legacy-sec1-div2-container-left-para'>
                                        <p>
                                            <strong style={{ fontSize: "25px" }}> BGS & SJB </strong> encourages
                                            students to cultivate a habit of creative
                                            thinking and a desire to excel at every level, with an amalgamation
                                            of rich culture and modern technology enabling students to become
                                            critical thinkers and life-long learners. Education transforms the
                                            students who make a difference to society and the world.
                                        </p>
                                        <p>
                                            The strong partnership between students, parents and teachers has
                                            helped the school achieve outstanding results in both academic and
                                            co-curricular activities. BGS is not just confined to the classroom
                                            setting. There are various clubs and enrichment activities, which
                                            provide a comprehensive educational experience to the students.
                                        </p>
                                        <p>
                                            <strong style={{ fontSize: "25px" }}> TO THE STUDENTS: BGS </strong>
                                            promises to help students become independent,
                                            responsible and reliable citizens with high standards of behaviour
                                            and exceptional character.
                                        </p>
                                        <p>
                                            <strong style={{ fontSize: "25px" }}>   TO THE PARENTS: BGS </strong>
                                            promises parents that it will provide their
                                            children with an inspiring and engaging learning environment,
                                            with a sound programme in all areas of study, with feedback and
                                            transparency in all student dealings.
                                        </p>
                                        <p>
                                            <strong style={{ fontSize: "25px" }}> TO THE TEACHERS: BGS </strong>
                                            promises to listen to the teachers’ thoughts,
                                            encourage their creativity, believe in their efforts and ideas,
                                            value their strategic insight, input and experience and stand by
                                            them in their innovative approach to academic and non-academic
                                            endeavours.
                                        </p>
                                    </div>
                                </div>
                                <div className='legacy-sec1-div2-container-right'>
                                    <ul>
                                        {LinkList.map((value, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href={value.link}> {value.title} </a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Div2 End */}
                    </div>
                </div>
                {/* sec 1 End */}
            </div>
        </div>
    )
}

export default Legacy
