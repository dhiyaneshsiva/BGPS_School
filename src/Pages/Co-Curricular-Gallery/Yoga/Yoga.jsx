import React, { useEffect } from 'react'
import "../Virtual-Arts/VirtualArts.css"

// Mantine UI
import { Center } from '@mantine/core'
import Co_Curricular_Comp from '../../../Components/Co-Curricular/Co_Curricular_Comp'

// Images
import Image1 from "../../../Assets/karate2.png"

const Yoga = () => {

    useEffect(() => {
        window.scroll(0, 0)
    })

    const Data = [
        `As per Yogic scriptures the practice of Yoga leads to the union of individual consciousness with that of the Universal Consciousness, indicating a perfect harmony between the mind and body, Man & Nature.  `,
        `At BGS Public School students are trained by experts. Which has helped them to reach their zenith in performing yoga. They participated in interschool, district, state level and national level competition and brought laurel to the school. On so many occasions they exhibited their talent, which motivates other fellow students to be a part of this activity. When the whole world is looking at India for the knowledge of yoga, why not our students? `,
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
                            <h1> Yoga </h1>
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

export default Yoga
