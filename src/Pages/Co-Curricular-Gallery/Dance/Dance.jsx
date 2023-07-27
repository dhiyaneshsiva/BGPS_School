import React, { useEffect } from 'react'
import "../Virtual-Arts/VirtualArts.css"

// Mantine UI
import { Center } from '@mantine/core'

// Images
import Image1 from "../../../Assets/Dance/Image1.png"
import Image2 from "../../../Assets/Dance/Image2.png"
import Image3 from "../../../Assets/Dance/Image3.png"

// Pages
import CoCurricularComp from '../../../Components/Co-Curricular/Co_Curricular_Comp'

const Dance = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const Data = [
        `The Dance classes at BGS Public School are a part of the in-house curriculum where it helps students to improve overall fitness, endurance, muscle toning and strengthening. It gives them the space to express their emotions, channel their feelings through different forms of dance and have fun with music and rhythm. Though it is a form of physical exercise, it also allows our children to connect with others, grow their confidence, and build their teamwork skills. `,
        `The students are encouraged to take part in various cultural activities and interschool competitions. The excitement and enthusiasm are boundless during the UTSAV celebrations at the BGS & SJB Group of institutions.`,
    ]

    const ImageData = [
        Image1, Image2, Image3
    ]
    return (
        <div>
            <div className='virtual-arts-page'>
                <div className='virtual-arts-conatiner'>
                    <div className='virtual-arts-conatiner-title'>
                        <Center>
                            <h1> Dance </h1>
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

export default Dance
