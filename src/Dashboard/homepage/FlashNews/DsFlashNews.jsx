import React from 'react'
import "./DsFlashNews.css"
import { useHistory } from "react-router-dom"

// Mantine core
import { Button, Center, Input } from '@mantine/core'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const DsFlashNews = () => {

    const [news, setNews] = useState('')
    const history = useHistory()

    const handleLogout = () => {
        localStorage.removeItem('UserName')
        history.push({ pathname: '/' })
    }

    useEffect(() => {
        if (!localStorage.getItem('UserName')) {
            history.push({ pathname: '/' })
        }
    }, [])

    // const handleAxios = () => {
    //     const body = {
    //         news: news
    //     }
    //     if (news === '') {
    //         alert("Please Enter Value")
    //     }
    //     else {
    //         axios?.post('http://localhost:5000/postnews', {
    //             ...body
    //         })
    //             ?.then(result => {
    //                 alert("Value Added in Database")
    //             })
    //             ?.catch(e => {
    //                 alert(e, 'Error Occured')
    //             })
    //     }
    // }
    return (
        <div>
            <div className='ds-flashnews-page'>
                <div className='ds-flashnews-container'>
                    <Input.Wrapper label="Input News to Flash" required maw={320} mx="auto">
                        <Input
                            placeholder="Input News to Flash"
                            onChange={(e) => setNews(e.target.value)}
                        />
                    </Input.Wrapper>
                    <Center style={{ marginTop: "2rem" }}>
                        <Button
                        //  onClick={handleAxios}
                         >
                            Submit
                        </Button>
                    </Center>
                    <Button className='ds-flashnews-logout-btn' onClick={handleLogout}>
                        Log Out
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DsFlashNews
