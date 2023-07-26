import React from 'react'
import "./SchoolSports.css"

// Images
import Whistle from "../../Assets/whistle.png"
import Bottle from "../../Assets/bottle.png"
import Alarm from "../../Assets/alarm.png"
import Weight from "../../Assets/weight.png"
import Play1 from "../../Assets/Sports/Volleyball.png"
import Play2 from "../../Assets/Sports/Football.png"
import Play3 from "../../Assets/Sports/Basketball.png"
import Play4 from "../../Assets/Sports/Cricket.png"
import Play5 from "../../Assets/Sports/Tennis.png"
import Grid1 from "../../Assets/school1.png"
import Grid2 from "../../Assets/school2.png"
import Grid3 from "../../Assets/school3.png"
import Grid4 from "../../Assets/school4.png"

// Mantine UI
import { Card } from '@mantine/core'
import SchoolHouse from '../../Components/SchoolHouse/SchoolHouse'



const SchoolSports = () => {

    window.scroll(0, 0)

    const GamesList = [
        {
            title: "Volleyball",
            icon: Play1
        },
        {
            title: "Football",
            icon: Play2
        },
        {
            title: "BasketBall",
            icon: Play3
        },
        {
            title: "Cricket",
            icon: Play4
        },
        {
            title: "Tennis",
            icon: Play5
        },
    ]


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

    return (
        <div>
            <div className='schoolsports-page'>
                {/* Section1  */}
                <section>
                    <div className='schoolsports-sec-1-container'>
                        <div className='schoolsports-sec-1-content'>
                            <h2>
                                School
                            </h2>
                            <h1>
                                Sports
                            </h1>
                            <p className='schoolsports-sec-1-content-para1'>
                                It helps in building skills.
                            </p>
                            <p className='schoolsports-sec-1-content-para2'>
                                Skills like teamwork, leadership,
                                patience, discipline, learning from
                                failure, Sportsmanship, etc., are
                                developed only when children play
                                sports regularly, and these skills
                                are equally important when it comes
                                to studies and management.
                            </p>
                        </div>
                        <img src={Bottle} alt='sports-bottle' className='sports-bottle' />
                        <img src={Whistle} alt='sports-Whistle' className='sports-whistle' />
                        <img src={Alarm} alt='sports-alarm' className='sports-alarm' />
                        <img src={Weight} alt='sports-weight' className='sports-weight' />
                    </div>
                </section>
                {/* Section1 End */}

                {/* Section2 */}
                <section>
                    <div className='schoolsports-sec-2-container'>
                        <div className='schoolsports-sec-2-content'>
                            <h1>
                                Games
                            </h1>
                            <div className='schoolsports-sec-2-grid'>
                                {GamesList?.map((value, index) => {
                                    return (
                                        <div className='schoolsports-sec-2-grid-div'>
                                            <Card key={index} className='schoolsports-sec-2-grid-card'>
                                                <img src={value.icon} alt='Img' />
                                            </Card>
                                            <h1>
                                                {value.title}
                                            </h1>
                                            <p>
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                            <p>
                                Our Admissions team will ensure the
                                smoothest possible transition for your
                                family. Kindly refer to the age-matrix
                                for admission. This matrix is created
                                as per the National Educational Policy
                                and the circular issued by the Karnataka
                                State Board of Education. (Click Age-matrix circular-2023-24.pdf for the circular)
                            </p>
                        </div>
                    </div>
                </section>
                {/* Section2 End */}

                {/* Section3  */}
                <SchoolHouse GridData={GridData} />
                {/* Section3 End */}
            </div>
        </div>
    )
}

export default SchoolSports
