import React, { useEffect } from 'react'
import "./Academics.css"

// Images
import Avatar1 from "../../Assets/curricular_left.png"
import Avatar2 from "../../Assets/admissionCrop.png"
import Avatar3 from "../../Assets/avatar.png"

const Academics = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const kindergartenPara = [
        ` The Kindergarten programme at BGS PS invites children to
        explore, wonder and discover.`,
        `We believe in starting the formal learning journey with the
        help of our qualified teaching teams experienced in Early
        Years, proven methodologies designed to develop confident
        learners, and a curriculum which is flexible, multi-faceted,
        multi-level, play-based, activity-based and inquiry-based.`,
        `A more holistic and interdisciplinary approach is applied
        where knowledge is integrated, connections explored, and
        young learners’ innate learning ability is harnessed. We
        nurture in children a questioning stance, the natural wonder
        and need for agency as they begin to take ownership of
        their own learning.`
    ]
    const primaryPara = [
        `The revised and revamped curriculum at Primary and Middle 
        School aims to develop inquiring, knowledgeable and caring 
        young people who help to create a better and more peaceful 
        world through intercultural understanding and respect. `,
        `As per the National Educational Policy 2020, all aspects 
        of curriculum and pedagogy will be reoriented and revamped 
        to equip our students with 21st century skills. Moving away 
        from rote learning, the curriculum is reduced in each subject 
        to focus more on core-essentials, to make space for critical 
        thinking and more holistic, inquiry-based, discovery-based, 
        discussion-based and analysis-based. `,
        `The students will have the tools at their disposal to conduct 
        inquiry, be problem solvers and successfully navigate their 
        future pathways. We are relentless in seeking remarkable 
        change in every student and providing evidence of informed 
        teaching practices to help achieve their best. `
    ]
    const secondaryPara = [
        `The secondary programme is mainly focused on challenging the 
        intellectual potential of the students alongside continuing to 
        develop their personal, physical, socio-emotional-ethical learning 
        to prepare them to face the challenges of life in the real world.  `,
        `Our teachers experienced in handling the senior school always 
        attempt to mirror the methodology and philosophy of the CBSE 
        Council. The curriculum provides ample scope for holistic 
        learning emphasizing constructivist rather than rote learning. 
        Students are encouraged to apply their knowledge and skills 
        in real-life problem-solving scenarios, promote critical and
        creative thinking aligned to the 21st century skills, integrate 
        experiential learning, sports & art-integrated learning, 
        gamification, etc. `,
        `Secondary school students are exposed to a plethora of 
        opportunities to expose their talents and skills in order 
        to prepare them for the future and become lifelong learners. 
        The school clubs, the student council, the school teams 
        enhance their confidence, interests, collaborative and 
        leadership skills.  `
    ]

    const kindergartenParaDetails = [
        {
            title: `Foundational Literacy and Numeracy`,
            para: [
                `The literacy programme for kindergarten aims 
                to give students a thorough understanding of 
                the sounds each letter makes and understand 
                the subtle difference in word meanings. 
                Through story readers, students will discover 
                new vocabulary words, develop fluency, and 
                reading comprehension skills. They will engage 
                in reading activities, and are expected to 
                answer basic questions about stories, nursery 
                rhymes, and more. `,
                `The curriculum for numeracy is a comprehensive 
                one which helps the students to master the concepts 
                in their early years. They will be to identify 
                shapes and their attributes, to count and recognize 
                numbers, add and subtract numbers, and complete patterns. 
                Moreover, it uses bright, colourful and engaging 
                activities to make math fun and enjoyable for the 
                little ones. Gaining a solid understanding of basic 
                concepts now will help them to apply them in the real 
                world. `
            ]
        },
        {
            title: `Science concepts `,
            para: [
                `Science in kindergarten paves the way for 
                students not only to learn about the world 
                around them but also to discover the connection 
                that all living and nonliving things have with 
                each other. Various themes will aid in learning 
                facts that will give them a better understanding 
                of things like plants, animals, matter, and energy, 
                just to name a few basics of physical science, 
                Earth/space science, and life science. `,
                `In addition, they inculcate scientific skills such 
                as observing, communicating their ideas/observations 
                to others, investigating the facts along with experimentation.`
            ]
        },
        {
            title: `Holistic learning`,
            para: [
                `To deliver a holistic and rounded education, we 
                provide a balance of academic and co-curricular 
                activities to students. Through outdoor play, drawing, 
                painting and other visual art, craft, drama and puppetry, 
                music and movement we ensure to attain the optimal 
                outcomes in the domains of physical and motor development, 
                cognitive development, socio-emotional-ethical development, 
                cultural/artistic development and the development of 
                communication.  `,
                `Revolutionary change is possible only if we awaken the talent 
                and skill in each child and make him/her listen, think and 
                create things in their own unique way.`
            ]
        }
    ]

    const Sec2Div2Para = [
        `The revised and revamped curriculum at Primary and Middle 
        School aims to develop inquiring, knowledgeable and caring 
        young people who help to create a better and more peaceful 
        world through intercultural understanding and respect. `,
        `As per the National Educational Policy 2020, all aspects 
        of curriculum and pedagogy will be reoriented and revamped 
        to equip our students with 21st century skills. Moving away 
        from rote learning, the curriculum is reduced in each subject 
        to focus more on core-essentials, to make space for critical 
        thinking and more holistic, inquiry-based, discovery-based, 
        discussion-based and analysis-based. `,
        `The students will have the tools at their disposal to conduct 
        inquiry, be problem solvers and successfully navigate their 
        future pathways. We are relentless in seeking remarkable 
        change in every student and providing evidence of informed 
        teaching practices to help achieve their best. `
    ]

    const ListLeft = [
        {
            title: "Curricular subjects include: ",
            li: [`English `, `Kannada  `, `Hindi  `, `Mathematics  `,
                `EVS (until Grade III) `, `Science & Social Studies (Grade IV onwards) `,
                `Coding and Computer Science `, `Health and Value based education `,]
        }
    ]
    const ListRight = [
        {
            title: "Non-curricular subjects include:  ",
            li: [`Art & Craft  `, `Vocal Music  `, `Dance  `, `Karate  `,
                `Yoga `, `Physical Education `,
                `Spell bee programmes and Olympiad`]
        }
    ]

    const sec3List1 = [
        `English`,
        `Second Language(Hindi / Kannada / Sanskrit) `,
        `Mathematics`,
        `Science`,
        `Social Studies`,
        `Skill subjects(to be introduced from the academic year 2023 - 24)`,
    ]
    return (
        <div>
            <div className='academics-page'>

                {/* Section1 */}
                <setion>
                    {/* Div1 */}
                    <div className='sec1-kindergarten-container'>
                        <div className='sec1-kindergarten-div-header'>
                            <div className='sec1-kindergarten-div-header-content'>
                                <div className='sec1-kindergarten-div-header-content-title'>
                                    <h1>
                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay='100'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true"
                                        >
                                            k
                                        </span>
                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay='300'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true"
                                        >
                                            i
                                        </span>
                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay='500'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true"
                                        >
                                            n
                                        </span>
                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay='700'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true"
                                        >
                                            d
                                        </span>
                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay='900'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true"
                                        >
                                            e
                                        </span>
                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay='1100'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true"
                                        >
                                            r
                                        </span>
                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay='1300'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true"
                                        >
                                            g
                                        </span>
                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay='1500'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true">
                                            a
                                        </span>
                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay='1700'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true">
                                            r
                                        </span>
                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay='1900'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true">
                                            d
                                        </span>
                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay='2100'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true">
                                            e
                                        </span>
                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay='2300'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true">
                                            n
                                        </span>
                                    </h1>
                                </div>
                                <div className='sec1-kindergarten-div-header-content-para'>
                                    {kindergartenPara.map((value, index) => {
                                        return (
                                            <p
                                                data-aos="fade-right"
                                                data-aos-delay={index * 200}
                                                data-aos-duration='1000'
                                                data-aos-easing="linear"
                                                data-aos-once="true"
                                                key={index}>
                                                {value}
                                            </p>
                                        )
                                    })}
                                </div>
                            </div>
                            <img
                                data-aos="zoom-in"
                                data-aos-delay='100'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true"
                                src={Avatar1} alt='img'
                                className='sec1-kindergarten-div-header-content-img' />
                        </div>
                    </div>
                    {/* Div1 End */}

                    <br />

                    {/* Div 2 */}
                    <div className='sec1-kindergarten-div2-container'>
                        <div className='sec1-kindergarten-div2-content'>
                            {
                                kindergartenParaDetails?.map((value, index) => {
                                    return (
                                        <div key={index}>
                                            <div className='sec1-kindergarten-div2-content-title'>
                                                <h1
                                                    data-aos="fade-right"
                                                    data-aos-delay='100'
                                                    data-aos-duration='1000'
                                                    data-aos-easing="linear"
                                                    data-aos-once="true"
                                                >
                                                    {value?.title}
                                                </h1>
                                            </div>
                                            <div className='sec1-kindergarten-div2-content-para'>
                                                {
                                                    value?.para?.map((para, id) => {
                                                        return (
                                                            <p key={id}
                                                                data-aos="fade-right"
                                                                data-aos-delay={id * 200}
                                                                data-aos-duration='1000'
                                                                data-aos-easing="linear"
                                                                data-aos-once="true">
                                                                {para}
                                                            </p>
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
                    {/* Div 2 ENd */}
                </setion>
                {/* Section1 End */}


                {/* Section2 */}

                <div className='sec1-primary-school-container'>
                    <div className='sec1-primary-school-div-header'>
                        <div className='sec1-primary-school-div-header-content'>
                            <div className='sec1-primary-school-div-header-content-title'>
                                <h1>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        p
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        r
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        i
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        m
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='900'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        a
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        r
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        y
                                    </span>
                                    &nbsp;
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        &
                                    </span>
                                    &nbsp;
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        m
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1900'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        i
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='2100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        d
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='2300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        d
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='2500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        l
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='2700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        e
                                    </span>
                                    <br />
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        s
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        c
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        h
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        o
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='900'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        o
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        l
                                    </span>
                                    {/* Primary & Middle School */}
                                </h1>
                            </div>
                            <div className='sec1-primary-school-div-header-content-para'>
                                {primaryPara.map((value, index) => {
                                    return (
                                        <p
                                            data-aos="fade-left"
                                            data-aos-delay={index * 200}
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true"
                                            key={index}>
                                            {value}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                        <img src={Avatar2} alt='img'
                            className='sec1-primary-school-div-header-content-img' />
                    </div>
                </div>



                {/* Div 2 */}
                <div className='sec2-primary-school-container'>
                    <div className='sec2-primary-school-content'>
                        <div className='sec2-primary-school-content-para'>
                            {Sec2Div2Para.map((value, index) => {
                                return (
                                    <p
                                        data-aos="fade-right"
                                        data-aos-delay={index * 200}
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                        key={index}>
                                        {value}
                                    </p>
                                )
                            })}
                        </div>
                        <div className='sec2-primary-school-content-list'>
                            <div className='sec2-primary-school-content-list-left'>
                                {ListLeft?.map((value, index) => {
                                    return (
                                        <div key={index}>
                                            <h1
                                                data-aos="zoom-in"
                                                data-aos-delay='100'
                                                data-aos-duration='1000'
                                                data-aos-easing="linear"
                                                data-aos-once="true">
                                                {value?.title}
                                            </h1>
                                            <ol>
                                                {
                                                    value?.li.map((item, id) => {
                                                        return (
                                                            <li
                                                                data-aos="fade-right"
                                                                data-aos-delay={id * 300}
                                                                data-aos-duration='1000'
                                                                data-aos-easing="linear"
                                                                data-aos-once="true"
                                                                key={id}>
                                                                {item}
                                                            </li>
                                                        )
                                                    })
                                                }

                                            </ol>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='sec2-primary-school-content-list-right'>
                                {ListRight?.map((value, index) => {
                                    return (
                                        <div key={index}>
                                            <h1
                                                data-aos="fade-left"
                                                data-aos-delay='100'
                                                data-aos-duration='1000'
                                                data-aos-easing="linear"
                                                data-aos-once="true">
                                                {value?.title}
                                            </h1>
                                            <ol>
                                                {
                                                    value?.li.map((item, id) => {
                                                        return (
                                                            <li
                                                                data-aos="fade-left"
                                                                data-aos-delay={id * 300}
                                                                data-aos-duration='1000'
                                                                data-aos-easing="linear"
                                                                data-aos-once="true"
                                                                key={id}>
                                                                {item}
                                                            </li>
                                                        )
                                                    })
                                                }

                                            </ol>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Div 2 End */}
                {/* Section2 eND */}


                {/* Section3 */}

                <div className='sec3-secondary-container'>
                    <div className='sec3-secondary-div-header'>
                        <div className='sec3-secondary-div-header-content'>
                            <div className='sec3-secondary-div-header-content-title'>
                                <h1>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        s
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        e
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        c
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        o
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='900'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        n
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        d
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        a
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        r
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        y
                                    </span>
                                    &nbsp;
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1900'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        &
                                    </span>
                                    &nbsp;
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='2100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        s
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='2300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        e
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='2500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        n
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='2700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        i
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='2900'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        o
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='3000'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        r
                                    </span>
                                    <br />

                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        s
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        e
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        c
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        o
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='900'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        n
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        d
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        a
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        r
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        y
                                    </span>
                                    &nbsp;
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='1900'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        s
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='2100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        c
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='2300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        h
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='2500'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        o
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='2700'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        o
                                    </span>
                                    <span
                                        data-aos="fade-left"
                                        data-aos-delay='2900'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        l
                                    </span>
                                    {/* Secondary & Senior Secondary School */}
                                </h1>
                            </div>
                            <div className='sec3-secondary-div-header-content-para'>
                                {secondaryPara.map((value, index) => {
                                    return (
                                        <p
                                            data-aos="fade-left"
                                            data-aos-delay={index * 200}
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true"
                                            key={index}>
                                            {value}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                        <img src={Avatar3} alt='img'
                            className='sec3-secondary-div-header-content-img' />
                    </div>
                </div>
                {/* Div2 */}
                <div className='sec3-secondary-div2-container'>
                    <div className='sec3-secondary-div2-content'>
                        <div className='sec3-secondary-div2-content-dub-div1'>
                            <div className='sec3-secondary-div2-content-dub-div1-title'>
                                <h1
                                    data-aos="fade-right"
                                    data-aos-delay='100'
                                    data-aos-duration='1000'
                                    data-aos-easing="linear"
                                    data-aos-once="true">
                                    Subjects for Grades IX & X:
                                </h1>
                            </div>
                            <div className='sec3-secondary-div2-content-dub-div1-list'>
                                <ul>
                                    {sec3List1.map((value, index) => {
                                        return (
                                            <li
                                                data-aos="fade-right"
                                                data-aos-delay={index * 200}
                                                data-aos-duration='1000'
                                                data-aos-easing="linear"
                                                data-aos-once="true"
                                                key={index}>
                                                {value}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className='sec3-secondary-div2-content-sub-div1'>
                            <h1
                                data-aos="zoom-in"
                                data-aos-delay='100'
                                data-aos-duration='1000'
                                data-aos-easing="linear"
                                data-aos-once="true"
                            >
                                Streams offered in Grade IX and Grade XII
                            </h1>
                        </div>
                        <div className='sec3-secondary-div2-content-sub-div2'>
                            <div className='sec3-secondary-div2-content-sub-div2-left'>
                                <div className='sec3-secondary-div2-content-sub-div2-left-title'>
                                    <h1
                                        data-aos="fade-right"
                                        data-aos-delay='100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true">
                                        Science stream
                                    </h1>
                                </div>
                                <div className='sec3-secondary-div2-content-sub-div2-left-para'>
                                    <h3
                                        data-aos="fade-right"
                                        data-aos-delay='300'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true">
                                        There are two programmes offered under the Science stream.
                                    </h3>
                                    <ul>
                                        <li
                                            data-aos="fade-right"
                                            data-aos-delay='500'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true">
                                            Integrated course (partnered with Aakash institute)
                                            – Aakash Institute has partnered with BGS PS to provide
                                            an integrated teaching approach and train them to
                                            compete in the IIT-JEE and NEET.
                                        </li>
                                        <li
                                            data-aos="fade-right"
                                            data-aos-delay='700'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true">
                                            Non-integrated course
                                        </li>
                                    </ul>
                                </div>
                                <div className='sec3-secondary-div2-content-sub-div2-left-para'>
                                    <h3
                                        data-aos="fade-right"
                                        data-aos-delay='100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true">
                                        Groups offered for both the programmes will be the same.
                                    </h3>
                                    <ul>
                                        <li
                                            data-aos="fade-right"
                                            data-aos-delay='300'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true"
                                        >
                                            Group 1 – Physics, Chemistry, Mathematics & optional
                                            subject (Biology or Computer Science or Physical Education)
                                        </li>
                                        <li
                                            data-aos="fade-right"
                                            data-aos-delay='500'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true">
                                            Group 2 – Physics, Chemistry, Biology, & optional subject
                                            (Mathematics or Physical Education)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='sec3-secondary-div2-content-sub-div2-right'>
                                <div className='sec3-secondary-div2-content-sub-div2-right-title'>
                                    <h1
                                        data-aos="fade-left"
                                        data-aos-delay='100'
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true">
                                        Science stream
                                    </h1>
                                </div>
                                <div className='sec3-secondary-div2-content-sub-div2-right-para'>
                                    <ul>
                                        <li
                                            data-aos="fade-left"
                                            data-aos-delay='300'
                                            data-aos-duration='1000'
                                            data-aos-easing="linear"
                                            data-aos-once="true"
                                        >
                                            Group 3 – Economics, Accountancy, Business Studies and
                                            Optional subject (Applied Mathematics/Computer Science/
                                            Physical Education)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Div2 End */}

                {/* Section3 End */}

            </div>
        </div>
    )
}

export default Academics
