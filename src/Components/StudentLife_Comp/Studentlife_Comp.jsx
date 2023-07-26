import React from 'react'
import "./Studentlife_Comp.css"

// Mantine Ui
import { Image } from '@mantine/core';

const Studentlife_Comp = ({ data }) => {
    return (
        <div>
            <div className='studentlife-council'>
                {
                    data?.map((value, index) => {
                        return (
                            <div className='studentlife-council-image'>
                                <Image src={value} alt='img' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Studentlife_Comp
