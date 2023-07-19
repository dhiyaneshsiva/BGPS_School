import React from 'react'
import "./Co-Curricular.css"

// Images
import Play1 from "../../Assets/play2.png"
import Play2 from "../../Assets/play4.png"
import Play3 from "../../Assets/play3.png"
import Play4 from "../../Assets/play1.png"
import Avatar from "../../Assets/curricular_left.png"
import Feather from "../../Assets/curricular_right.png"
import Visual from "../../Assets/visual.png"
import Dance from "../../Assets/dance.png"
import Music from "../../Assets/music.png"
import Karate from "../../Assets/karate.png"
import Yoga from "../../Assets/karate2.png"

const Co_Curricular = () => {

    const ListGrid = [
        {
            title: "Visual Arts",
            count: "1",
            icon: Play1
        },
        {
            title: "Dance",
            count: "2",
            icon: Play2
        },
        {
            title: "Music",
            count: "3",
            icon: Play3
        },
        {
            title: "Karate",
            count: "4",
            icon: Play4
        },
    ]

    const Grid = [
        {
            title: 'Visual Arts',
            para: `The Visual Arts programme 
            is part of the in-house curriculum 
            where it helps students at BGS Public 
            School to bring out their creativity 
            as well as develop their personality. 
            It lets them explore and perform their 
            artistic skills, imagination and memories 
            creatively. The skills learnt during 
            their Art classes encourage them to 
            integrate their learnings in other subjects.            `,
            icon: Visual
        },
        {
            title: 'Dance',
            para: `The Visual Arts programme is 
            part of the in-house curriculum where 
            it helps students at BGS Public School 
            to bring out their creativity as well 
            as develop their personality. It lets 
            them explore and perform their artistic 
            skills, imagination and memories creatively. 
            The skills learnt during their Art classes 
            encourage them to integrate their learnings 
            in other subjects. 
            `,
            icon: Dance
        },
        {
            title: 'Music',
            sub_title: '(Vocal)',
            para: `The Visual Arts programme is 
            part of the in-house curriculum where 
            it helps students at BGS Public School 
            to bring out their creativity as well 
            as develop their personality. It lets 
            them explore and perform their artistic 
            skills, imagination and memories creatively. 
            The skills learnt during their Art classes 
            encourage them to integrate their 
            learnings in other subjects. 
            `,
            icon: Music
        },
        {
            title: 'Karate',
            para: `The Visual Arts programme is 
            part of the in-house curriculum 
            where it helps students at BGS 
            Public School to bring out their 
            creativity as well as develop their 
            personality. It lets them explore 
            and perform their artistic skills, 
            imagination and memories creatively. 
            The skills learnt during their Art 
            classes encourage them to integrate 
            their learnings in other subjects.
            `,
            icon: Karate
        },
        {
            title: 'Yoga',
            para: `The Visual Arts programme is 
            part of the in-house curriculum where 
            it helps students at BGS Public School 
            to bring out their creativity as well 
            as develop their personality. It lets 
            them explore and perform their artistic 
            skills, imagination and memories creatively. 
            The skills learnt during their Art classes 
            encourage them to integrate their 
            learnings in other subjects. 
            `,
            icon: Yoga
        },
    ]
    return (
        <div>
            <div className="co-curricular-page">

                {/* Section 1 */}

                <section>
                    <div className="co-curricular-head">
                        <div className="co-curricular-head-content">
                            <div className="co-curricular-head-content-title">
                                Co-Curricular
                            </div>
                            <div className="co-curricular-head-content-para">
                                <h5>It helps in building skills.</h5>
                                <p>
                                    Skills like teamwork, leadership, patience,
                                    discipline, learning from failure, Sportsmanship,
                                    etc., are developed only when children play
                                    sports regularly, and these skills are equally
                                    important when it comes to studies and management.
                                </p>
                            </div>
                            <div className="co-curricular-head-content-grid">
                                <ul>
                                    {ListGrid.map((value, index) => {
                                        return (
                                            <>
                                                <li key={index}>
                                                    <img src={value.icon} alt="Play-Icons" />
                                                    <p>{value.count}</p>
                                                    <h5>{value.title}</h5>
                                                </li>
                                            </>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <img src={Avatar} alt='Avatar' className='Avatar' />
                        <img src={Feather} alt='Feather' className='Feather' />
                    </div>
                </section>

                {/* Section 1 End */}

                {/* Section 2 */}

                <section>
                    <div className="co-curricular-container">
                        {
                            Grid.map((value, index) => {
                                return (
                                    <div key={index} className='co-curricular-container-display'>
                                        <div className="co-curricular-container-img">
                                            <img src={value.icon} alt="Content-Image" />
                                        </div>
                                        <div className="co-curricular-container-content">
                                            <div>
                                                <h2>
                                                    {value.title}
                                                </h2>

                                                <p>
                                                    {value.para}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>

                {/* Section 2 end */}

            </div>
        </div>
    )
}

export default Co_Curricular