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
                    <h1> Message From The Management Members</h1>
                </Center>
                <Founder1 />
                <Founder2 />
                <Founder3 />
            </div>
        </div>
    )
}

export default MFM
