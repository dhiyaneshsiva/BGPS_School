import React from 'react'
import "./MFM.css"

// Pages
import Founder2 from '../Founders/Founder2'
import Founder1 from '../Founders/Founder1'
import Founder3 from '../Founders/Founder3'

// Mantine uI
import { Center } from '@mantine/core'

const MFM = () => {
    return (
        <div>
            <div className='mfm-page'>
                <Center>
                    <h1>
                        <span
                            data-aos="fade-right"
                            data-aos-delay='100'
                            data-aos-duration='1000'
                            data-aos-easing="linear"
                            data-aos-once="true">
                            Message
                        </span>
                        &nbsp;
                        <span
                            data-aos="fade-right"
                            data-aos-delay='300'
                            data-aos-duration='1000'
                            data-aos-easing="linear"
                            data-aos-once="true"
                        >
                            From The
                        </span>
                        &nbsp;
                        <span
                            data-aos="fade-right"
                            data-aos-delay='500'
                            data-aos-duration='1000'
                            data-aos-easing="linear"
                            data-aos-once="true"
                        >
                            Management
                        </span>
                        &nbsp;
                        <span
                            data-aos="fade-right"
                            data-aos-delay='700'
                            data-aos-duration='1000'
                            data-aos-easing="linear"
                            data-aos-once="true">
                            Members
                        </span>
                    </h1>
                </Center>
                <Founder1 />
                <Founder2 />
                <Founder3 />
            </div>
        </div>
    )
}

export default MFM
