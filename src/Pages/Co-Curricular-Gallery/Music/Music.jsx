import React, { useEffect } from 'react'
import "../Virtual-Arts/VirtualArts.css"

// Mantine UI
import { Center } from '@mantine/core'
import Co_Curricular_Comp from '../../../Components/Co-Curricular/Co_Curricular_Comp'

// Images
import Image1 from "../../../Assets/music.png"

const Music = () => {

    useEffect(() => {
        window.scroll(0, 0)
    })

    const Data = [
        `As per Yogic scriptures the practice of Yoga leads to the union of individual consciousness with that of the Universal Consciousness, indicating a perfect harmony between the mind and body, Man & Nature.`,
        `Their performance during the school assembly, cultural and other events paves way for them to gain confidence and teaches them about pitch, tone and rhythm. It ignites their skill to analyze, adjust and adapt from memory. `,
        `BGS Public School provides vast opportunities for students to experience their knowledge and skill in music. They are trained to participate in various events of the school and also compete in interschool competitions. `
    ]

    const ImageData = [
        Image1, Image1, Image1
    ]
    return (
        <div>
            <div className='virtual-arts-page'>
                <div className='virtual-arts-conatiner'>
                    <div className='virtual-arts-conatiner-title'>
                        <Center>
                            <h1> Music (Vocal) </h1>
                        </Center>
                    </div>
                </div>
                <div className='virtual-arts-content'>
                    <Co_Curricular_Comp data={Data} Image={ImageData} />
                </div>
            </div>
        </div>
    )
}

export default Music
