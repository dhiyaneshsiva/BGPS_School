import React from 'react'
import "./SchoolHouse.css"

// Mantine Ui
import { Card } from '@mantine/core'

const SchoolHouse = ({ GridData }) => {
    return (
        <div>
            <div className="schoolhouse">
                <h1>School Houses</h1>
                <div className="schoolhouse-card-container">
                    {
                        GridData?.map((value, index) => {
                            return (
                                <Card key={index} className='schoolhouse-cards'>
                                    <Card.Section className='schoolhouse-cards-grid-image'>
                                        <img src={value.icon} alt="Grid" />
                                    </Card.Section>
                                    <h2>
                                        {value.title}
                                    </h2>
                                    <p>
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
