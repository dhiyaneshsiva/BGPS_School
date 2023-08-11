import React from 'react'
import "./SchoolHouse.css"

// Mantine Ui
import { Card } from '@mantine/core'

const SchoolHouse = ({ GridData }) => {
    return (
        <div>
            <div className="schoolhouse">
                <h1
                    data-aos="fade-right"
                    data-aos-delay='100'
                    data-aos-duration='1000'
                    data-aos-easing="linear"
                    data-aos-once="true"
                >School Houses</h1>
                <div className="schoolhouse-card-container">
                    {
                        GridData?.map((value, index) => {
                            return (
                                <Card key={index} className='schoolhouse-cards'>
                                    <Card.Section
                                        data-aos="fade-up"
                                        data-aos-delay={index * 200}
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                        className='schoolhouse-cards-grid-image'>
                                        <img src={value.icon} alt="Grid" />
                                    </Card.Section>
                                    <h2
                                        data-aos="fade-up"
                                        data-aos-delay={index * 200}
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        {value.title}
                                    </h2>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-delay={index * 200}
                                        data-aos-duration='1000'
                                        data-aos-easing="linear"
                                        data-aos-once="true"
                                    >
                                        {value.para}
                                    </p>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SchoolHouse
