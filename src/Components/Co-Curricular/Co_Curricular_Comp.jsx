import React from 'react'
import "./Co_Curricular_Comp.css"

// Mantine UI
import { Grid, List, ThemeIcon } from '@mantine/core'

// Tabler Icons
import { ApiApp } from 'tabler-icons-react';




const Co_Curricular_Comp = ({ data, Image }) => {
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
            {/* <Grid>
                {Image?.map((value, index) => {
                    return (
                        <>
                            <Grid.Col span={3} key={index}>
                                <img src={value}  alt='img'/>
                            </Grid.Col>
                        </>
                    )
                })}
            </Grid> */}
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

export default Co_Curricular_Comp
