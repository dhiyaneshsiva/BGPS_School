import React, { useEffect } from 'react'
import "../Virtual-Arts/VirtualArts.css"

// Mantine UI
import { Center } from '@mantine/core'
import Co_Curricular_Comp from '../../../Components/Co-Curricular/Co_Curricular_Comp'

// Images
import Image1 from "../../../Assets/Karate/Image1.png"
import Image2 from "../../../Assets/Karate/Image2.png"
import Image3 from "../../../Assets/Karate/Image3.png"
import Image4 from "../../../Assets/Karate/Image4.png"
import Image5 from "../../../Assets/Karate/Image5.png"
import Image6 from "../../../Assets/Karate/Image6.jpg"
import Image7 from "../../../Assets/Karate/Image7.png"
import Image8 from "../../../Assets/Karate/Image8.png"
import Image9 from "../../../Assets/Karate/Image9.png"
import Image10 from "../../../Assets/Karate/Image10.png"
import Image11 from "../../../Assets/Karate/Image11.png"

const Karate = () => {

    useEffect(() => {
        window.scroll(0, 0)
    })

    const Data = [
        `Self-defense is a valuable skill that protects and even raises confidence in children. It also has other advantages like honing leadership skills, developing character, and encouraging self-discipline. BGS Public School students are inculcated to be a confident Citizens and leader.`,
        `The students are encouraged to take part in various cultural activities and interschool competitions. The excitement and enthusiasm are boundless during the UTSAV celebrations at the BGS & SJB Group of institutions.`
    ]

    const ImageData = [
        Image1, Image2, Image3,
        Image4, Image5, Image6,
        Image7, Image8, Image9,
        Image10, Image11
    ]
    return (
        <div>
            <div className='virtual-arts-page'>
                <div className='virtual-arts-conatiner'>
                    <div className='virtual-arts-conatiner-title'>
                        <Center>
                            <h1> Karate </h1>
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

export default Karate
