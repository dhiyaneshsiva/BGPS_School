import React from 'react'
import "./Co_Curricular_Comp.css"

// Mantine UI
import { List } from '@mantine/core'




const CoCurricularComp = ({ data, Image }) => {
    return (
        <div>
            <div className='co-curricular-comp-ul'>
                <List
                >
                    {data?.map((value, index) => {
                        return (
                            <List.Item key={index}>
                                {value}
                            </List.Item>
                        )
                    })}
                </List>
            </div>
            <br />
            <div className='co-curricular-comp-grid'>
                {Image?.map((value, index) => {
                    return (
                        <div key={index} className='co-curricular-comp-grid-image'>
                            <img src={value} alt='Img' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CoCurricularComp
