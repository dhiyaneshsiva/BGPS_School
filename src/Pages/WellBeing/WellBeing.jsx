import React, { useEffect } from 'react'
import "./WellBeing.css"

// Images
import Image1 from "../../Assets/WellBeing/1.jpg"
import Image2 from "../../Assets/WellBeing/2.jpg"
import Image3 from "../../Assets/WellBeing/3.jpg"
import Image4 from "../../Assets/WellBeing/4.jpg"
import Image5 from "../../Assets/WellBeing/5.jpg"
import Image6 from "../../Assets/WellBeing/6.jpg"
import Image7 from "../../Assets/WellBeing/7.jpg"
import Image8 from "../../Assets/WellBeing/8.jpg"
import Image9 from "../../Assets/WellBeing/9.jpg"
import Image10 from "../../Assets/WellBeing/10.jpg"
import Image11 from "../../Assets/WellBeing/11.jpg"
import Image12 from "../../Assets/WellBeing/12.jpg"
import Image13 from "../../Assets/WellBeing/13.jpg"
import Image14 from "../../Assets/WellBeing/14.jpg"

const WellBeing = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const Data = [
        {
            title: `Health Education Programme: `,
            para: [
                `Health Education is given equal importance alongside the curriculum. It instills skills, knowledge, and a positive attitude in students. The Health Education curriculum focuses on Emotional health, Social Health, Physical Health and Mental Health. Following the guidelines of World Health Organization, the health programme prevents major health risks among the students and to engage the education sector in efforts to change the educational, social and economic, and political conditions that affect risk.`
            ]
        },
        {
            title: `Infirmary `,
            para: [
                `
                The school has a well-equipped infirmary and a registered nurse. The school Nurse ensures the students’ physical well-being and provides basic first aid during school accidents or sudden illness. If necessary, referrals are made either to the nearest hospital or our BGS Hospital.`,
                `An annual health check-up is organized for all our students and the health report is shared with the parents too. An accidental insurance policy for every child covers accidents that happen at school or on the way to school, as a part of our health policy. `
            ]
        },
        {
            title: `School Wellness Centre`,
            para: [
                `The school Counsellor plays an important role in supporting the students to make healthy lifestyle choices and understand the effects of their choices on their health and wellbeing. The Wellness programmes are designed to benefit both students and staff in all kinds of matters related to their mood and their own mental well-being. `,
                `The students meet the counsellor in the wellness centre for challenges related to tensions, anxiety or depression, stress or sleep difficulties. Interpersonal or domestic problems or any other well-being concerns. `
            ]
        },
        {
            title: `School Counsellor `,
            para: [
                `The School Counsellor plays an important role in supporting the students to make healthy lifestyle choices and understand the effects of their choices on their health and wellbeing. The Wellness programmes are designed to benefit both students and staff, as they have a long-term impact on improving quality of life and educational outcomes. `
            ]
        },
    ]

    const ImageData = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image9,
        Image10,
        Image11,
        Image12,
        Image7,
        Image8,
        Image13,
        Image14,
    ]
    return (
        <div>
            <div className="wellbeing-page">
                {/* Sec1 */}
                <div className="wellbeing-sec1-container">
                    <div className="wellbeing-sec1-content">
                        {
                            Data?.map((value, index) => {
                                return (
                                    <div key={index}>
                                        <div className="wellbeing-sec1-content-title">
                                            <h1>
                                                {value?.title}
                                            </h1>
                                        </div>
                                        <div className="wellbeing-sec1-content-para">
                                            {value?.para?.map((para, id) => {
                                                return (
                                                    <p key={id}>
                                                        {para}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Sec1 end */}

                {/* Sec2 */}
                <div className="wellbeing-sec2-container">
                    <div className="wellbeing-sec2-grid">
                        {ImageData?.map((value, index) => {
                            return (
                                <div key={index} className="wellbeing-sec2-grid-image">
                                    <img src={value} alt="Grid Images" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Sec2 ENd */}
            </div>
        </div>
    )
}

export default WellBeing