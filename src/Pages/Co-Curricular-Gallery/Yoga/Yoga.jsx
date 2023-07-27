import React, { useEffect } from 'react'
import "../Virtual-Arts/VirtualArts.css"

// Mantine UI
import { Center } from '@mantine/core'

// Page
import CoCurricularComp from '../../../Components/Co-Curricular/Co_Curricular_Comp'

// Images
import Image1 from "../../../Assets/Yoga/Image1.png"
import Image2 from "../../../Assets/Yoga/Image2.png"
import Image3 from "../../../Assets/Yoga/Image3.png"
import Image4 from "../../../Assets/Yoga/Image4.png"
import Image5 from "../../../Assets/Yoga/Image5.png"
import Image6 from "../../../Assets/Yoga/Image6.png"
import Image7 from "../../../Assets/Yoga/Image7.png"
import Image8 from "../../../Assets/Yoga/Image8.png"

const Yoga = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const Data = [
        `As per Yogic scriptures the practice of Yoga leads to the union of individual consciousness with that of the Universal Consciousness, indicating a perfect harmony between the mind and body, Man & Nature.  `,
        `At BGS Public School students are trained by experts. Which has helped them to reach their zenith in performing yoga. They participated in interschool, district, state level and national level competition and brought laurel to the school. On so many occasions they exhibited their talent, which motivates other fellow students to be a part of this activity. When the whole world is looking at India for the knowledge of yoga, why not our students? `,
    ]

    const ImageData = [
        Image1, Image2, Image5,
        Image4, Image6, Image3, Image7,
        Image8,
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
                    <CoCurricularComp data={Data} Image={ImageData} />
                </div>
            </div>
        </div>
    )
}

export default Yoga
