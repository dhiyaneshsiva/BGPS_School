import React, { useEffect } from 'react'
import "../Virtual-Arts/VirtualArts.css"

// Mantine UI
import { Center } from '@mantine/core'
import Co_Curricular_Comp from '../../../Components/Co-Curricular/Co_Curricular_Comp'

// Images
import Image1 from "../../../Assets/karate.png"

const Karate = () => {

    useEffect(() => {
        window.scroll(0, 0)
    })

    const Data = [
        `Self-defense is a valuable skill that protects and even raises confidence in children. It also has other advantages like honing leadership skills, developing character, and encouraging self-discipline. BGS Public School students are inculcated to be a confident Citizens and leader.`,
        `The students are encouraged to take part in various cultural activities and interschool competitions. The excitement and enthusiasm are boundless during the UTSAV celebrations at the BGS & SJB Group of institutions.`
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
