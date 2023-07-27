import React, { useEffect } from 'react'
import "./VirtualArts.css"

// Mantine UI
import { Center } from '@mantine/core'

// Page
import CoCurricularComp from '../../../Components/Co-Curricular/Co_Curricular_Comp'

// Images
import Image1 from "../../../Assets/visual.png"
import Image2 from "../../../Assets/VirtualArts/Image1.jpg"
import Image3 from "../../../Assets/VirtualArts/Image2.jpg"

const VirtualArts = () => {

    useEffect(() => {
        window.scroll(0, 0)
    },[])

    const Data = [
        `Visual Arts programme is part of the in-house curriculum where it helps students at BGS Public School to bring out their creativity as well as develop their personality. It lets them explore and perform their artistic skills, imagination and memories creatively. The skills learnt during their Art classes encourages them to integrate their learnings in other subjects. `,
        `Along with nurturing the artistic skills, students develop the skill to analyze, criticize constructively, find reason effectively and think logically. It teaches students to utilize art as a tool to manage their stress and emotions. The group projects help them to work as a team and collaborate with each other to present their best work. `,
        `Students at BGS are also encouraged and guided to participate in the Interschool competitions and events.  `
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
                            <h1> Visual Arts </h1>
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

export default VirtualArts
