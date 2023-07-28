import React from 'react'
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

const SchoolZone = () => {


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
            </div>
        </div>
    )
}

export default SchoolZone
