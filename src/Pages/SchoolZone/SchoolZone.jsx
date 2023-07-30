import React, { useEffect } from 'react'
import "./SchoolZone.css"

// Images
import Avatar1 from "../../Assets/curricular_left.png"

// Grid Images
import Image1 from "../../Assets/SchoolZone/Classroom/Image1.png"
import Image2 from "../../Assets/SchoolZone/Classroom/Image2.png"
import Image3 from "../../Assets/SchoolZone/Classroom/Image3.png"
import Image4 from "../../Assets/SchoolZone/Classroom/Image4.png"

// LIBRARY Images 
import LabImage1 from "../../Assets/SchoolZone/Library/Image1.png"
import LabImage2 from "../../Assets/SchoolZone/Library/Image2.png"
import LabImage3 from "../../Assets/SchoolZone/Library/Image3.png"
import LabImage4 from "../../Assets/SchoolZone/Library/Image4.png"

// PlayGround Images
import PlayImage1 from "../../Assets/SchoolZone/PlayGround/Image1.png"
import PlayImage2 from "../../Assets/SchoolZone/PlayGround/Image2.png"
import PlayImage3 from "../../Assets/SchoolZone/PlayGround/Image3.png"
import PlayImage4 from "../../Assets/SchoolZone/PlayGround/Image4.png"
import PlayImage5 from "../../Assets/SchoolZone/PlayGround/Image5.png"
import PlayImage6 from "../../Assets/SchoolZone/PlayGround/Image6.png"
import PlayImage7 from "../../Assets/SchoolZone/PlayGround/Image7.png"
import PlayImage8 from "../../Assets/SchoolZone/PlayGround/Image8.png"
import PlayImage9 from "../../Assets/SchoolZone/PlayGround/Image9.png"
import PlayImage10 from "../../Assets/SchoolZone/PlayGround/Image10.png"
import PlayImage11 from "../../Assets/SchoolZone/PlayGround/Image11.png"
import PlayImage12 from "../../Assets/SchoolZone/PlayGround/Image12.png"

// IT Lab Images
import ItLabImage1 from "../../Assets/ItLab/1.jpg"
import ItLabImage2 from "../../Assets/ItLab/2.jpg"
import ItLabImage3 from "../../Assets/ItLab/3.jpg"
import ItLabImage4 from "../../Assets/ItLab/4.jpg"
import ItLabImage5 from "../../Assets/ItLab/5.jpg"
import ItLabImage6 from "../../Assets/ItLab/6.jpg"


// Virtual Arts
import VrImage1 from "../../Assets/VirtualArts/Image1.png"
import VrImage2 from "../../Assets/VirtualArts/Image2.jpg"
import VrImage3 from "../../Assets/VirtualArts/Image3.png"
import VrImage4 from "../../Assets/VirtualArts/Image4.png"
import VrImage5 from "../../Assets/VirtualArts/Image5.jpg"
import VrImage6 from "../../Assets/VirtualArts/Image6.jpg"

// Music Images
import MusicImage1 from "../../Assets/Music/Image1.png"
import MusicImage2 from "../../Assets/Music/Image2.png"
import MusicImage3 from "../../Assets/Dance/Image1.png"
import MusicImage4 from "../../Assets/Dance/Image2.png"
import MusicImage5 from "../../Assets/Dance/Image3.png"

import MissionVission from "../../Assets/VissionMission.jpg"


// Menu Images
import MenuImage1 from "../../Assets/Menu/1.jpg"
import MenuImage2 from "../../Assets/Menu/2.jpg"
import MenuImage3 from "../../Assets/Menu/3.jpg"
import MenuImage4 from "../../Assets/Menu/4.jpg"
import MenuImage5 from "../../Assets/Menu/5.jpg"
import MenuImage6 from "../../Assets/Menu/6.jpg"

const SchoolZone = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])


    const data = [
        {
            title: `CLASSROOMS`,
            para: [
                `With rapid technological advancement, it is very 
                much essential for us to be close to nature to bring 
                in sensitivity in the young minds. At BGSPS, there 
                are 54 well-ventilated classrooms with wide expansive 
                windows which allow lot of natural light and breeze. 
                Classrooms on the ground floor have attached washrooms 
                and exclusively designed for playgroup children between 
                4-7 years.FF`
            ],
            images: [
                Image1, Image2, Image3, Image4
            ]
        },
        {
            title: `LIBRARY`,
            para: [
                `Most of the students at BGSPS are avid readers. 
                Children enjoy reading encyclopedias, sitting on 
                the most comfortable furniture in the vast reading 
                spaces which add pleasure t their reading.`,
                `The school has taken utmost care in selecting the 
                books for students of all levels and the stock is 
                upgraded from time to time. Efficient Librarians 
                are always ready to help students in developing 
                good reading skills. The total books in the library 
                exceed 10,000 with nearly 3500 reference books, 2000 
                academic books and the rest the best literature, 
                fiction, non-fiction and a good collection of poetry 
                and mythological books.`
            ],
            images: [
                LabImage1, LabImage2, LabImage3, LabImage4
            ]
        },
        {
            title: `PLAY GROUND`,
            para: [
                `Our school is not only tasked with preparing 
                children for their future careers, but also teaching 
                essential life skills, habits and attitudes that will 
                help them successfully navigate adulthood. To get the 
                best learning experience children require both indoor 
                and outdoor physical activity.`,
                `BGSPS houses a sprawling playground with a football 
                field, Athletic track 200m, throwball and volley ball 
                courts.`
            ],
            images: [
                PlayImage2,
                PlayImage5, PlayImage9, PlayImage11,
                PlayImage6, PlayImage10, PlayImage12,
                PlayImage3, PlayImage4, PlayImage1,
                PlayImage8, PlayImage7
            ]
        },
        {
            title: ` IT LAB`,
            para: [
                `The school IT Lab is well equipped with state-of-the-art 
                infrastructure. Technology plays a major role in 21st century 
                education. Integrating technology into the curriculum is a 
                very challenging task for teachers. Students are motivated 
                to search on the internet for easy reference to help them 
                in presenting the best academic projects. Four individual 
                audiovisual labs that can accommodate 50 students are 
                situated at all three levels of the building.`
            ],
            images: [
                ItLabImage1,
                ItLabImage2,
                ItLabImage3,
                ItLabImage4,
                ItLabImage5,
                ItLabImage6,
            ]
        },
        {
            title: ` ART & CRAFT`,
            para: [
                `The hub of creativity, Bright splashes of colours, 
                it’s just amazing to see little ideas turn into shapes 
                and figures that reflect the passion of the young creators.`
            ],
            images: [
                VrImage1,
                VrImage2,
                VrImage3,
                VrImage4,
                VrImage5,
                VrImage6,
            ]
        },
        {
            title: ` MUSIC & DANCE`,
            para: [
                `Here children are given a lot of opportunities to 
                improve their cognitive and physical health. Music 
                develops abstract reasoning which is required for 
                academic success and improves the ability of higher 
                order thinking. Music and Dance together enhances 
                happiness, gives team spirit and leadership skills.`
            ],
            images: [
                MusicImage1,
                MusicImage2,
                MusicImage3,
                MusicImage4,
                MusicImage5,
            ]
        },
    ]


    const MenuImage = [
        MenuImage1,
        MenuImage2,
        MenuImage3,
        MenuImage4,
        MenuImage5,
        MenuImage6,
    ]
    return (
        <div>
            <div className='schoolZone-page'>
                {/* Section1 */}
                <div className='schoolZone-sec1'>
                    <div className='schoolZone-sec1-container'>
                        <div className='schoolZone-sec1-content'>
                            <div className='schoolZone-sec1-content-title'>
                                <h1>
                                    Facilities
                                </h1>
                            </div>
                            <div className='schoolZone-sec1-content-para'>
                                <p>
                                    The school is in a lush green environment of 100 acres.
                                    It is absolutely pollution free and merges with nature.
                                    BGSPS offers its students all the advantages of a modern
                                    educational system with an enriching curriculum without
                                    the distractions of modern city life and the campus is
                                    in harmony with nature, surrounded by evergreen land and
                                    valley.
                                </p>
                            </div>
                        </div>
                        <img src={Avatar1} alt='Avatar' className='schoolZone-sec1-container-img' />
                    </div>
                </div>
                {/* Section1 end */}

                {/* Section2 */}
                <div className='schoolZone-sec2'>
                    <div className='schoolZone-sec2-container'>
                        <div className='schoolZone-sec2-content'>
                            {
                                data.map((value, index) => {
                                    return (
                                        <div className='schoolZone-sec2-content-grid' key={index}>
                                            <div className='schoolZone-sec2-content-left'>
                                                <div className='schoolZone-sec2-content-left-title'>
                                                    <h1>
                                                        {value.title}
                                                    </h1>
                                                </div>
                                                <div className='schoolZone-sec2-content-left-para'>
                                                    {
                                                        value?.para?.map((para, id) => {
                                                            return (
                                                                <p key={id}>
                                                                    {para}
                                                                </p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className='schoolZone-sec2-content-right'>
                                                {
                                                    value?.images?.map((images, ke) => {
                                                        return (
                                                            <img key={ke} src={images} alt='img' className='schoolZone-sec2-content-right-image' />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* Section2 End */}

                {/* Sec3 */}
                <div className="schoolZone-sec3-container">
                    <div className="schoolZone-sec3-content">
                        <div className="schoolZone-sec3-content-left">
                            <div className="schoolZone-sec3-content-left-title">
                                <h1>
                                    MONKEY BOX
                                    The Tiffin Revolution
                                </h1>
                            </div>
                            <div className="schoolZone-sec3-content-left-image">
                                <img src={MissionVission} alt="VissionMission" />
                            </div>
                            <div className="schoolZone-sec3-content-left-title2">
                                <h1>Vision</h1>
                                <p>
                                    Our vision is for every school going kid to eat warm, healthy, nutritious meals daily.
                                </p>
                            </div>
                            <div className="schoolZone-sec3-content-left-title3">
                                <h1>Mission</h1>
                                <p>
                                    Our mission is to take away mothers’ worries about what to pack in their kids’ boxes on a daily basis.
                                </p>
                            </div>
                            <a href="http://bgspskengeri.edu.in/wp-content/uploads/2023/06/MB-brochure-page-1.pdf">MB Brochure</a>
                            <a href="http://bgspskengeri.edu.in/wp-content/uploads/2023/06/MB-Sample-Menu-with-Rates.pdf">MB Menu with Rates</a>
                        </div>
                        <div className="schoolZone-sec3-content-right">
                            <h1>
                                Why Monkey Box?
                            </h1>
                            <ul>
                                <li>
                                    Nutrition made delectable:
                                    <p>
                                        Planned by nutritionists, prepared by 5-star chefs – to ensure that only the yummiest, healthiest food makes it into a Monkey Box.
                                    </p>
                                </li>
                                <li>
                                    Naturally Fresh:
                                    <p>
                                        All our veggies & staples are farm sourced, and meals are freshly cooked in vitro modern kitchens, daily.
                                    </p>
                                </li>
                                <li>
                                    Healthy weight, healthy children:
                                    <p>
                                        53% of kids in metros have unhealthy BMI’s. Which is why every Monkey Box is planned to help your child maintain a healthy body weight for his/her age.
                                    </p>
                                </li>
                                <li>
                                    Everything a growing child needs:
                                    <p>
                                        Portion sizes in o Monkey Box are age specific. These are carefully planned based on the recommended dietary allowance (RDA) of nutrients for age groups 3 to 18.
                                    </p>
                                </li>
                            </ul>
                            <h1>
                                The Monkey Box – ‘5 Food Foundation’:
                            </h1>
                            <ul className='schoolZone-sec3-ul2'>
                                <li>
                                    Pulses – Protein for strength, endurance, and growth
                                </li>
                                <li>
                                    Veggies – Vitamins, Minerals, and Phytonutrients
                                </li>
                                <li>
                                    Fruits – Low-fat & packed with fibre.
                                </li>
                                <li>
                                    Dairy – Calcium for strong bones and teeth.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Sec3 End */}

                {/* Sec4  */}
                <div className="schoolZone-sec4">
                    <div className="schoolZone-sec4-container">
                        <div className="schoolZone-sec4-container-grid">
                            {
                                MenuImage.map((value, index) => {
                                    return (
                                        <div key={index} className="schoolZone-sec4-container-grid-image">
                                            <img src={value} alt="MenuImages" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* Sec4 End */}
            </div>
        </div>
    )
}

export default SchoolZone
