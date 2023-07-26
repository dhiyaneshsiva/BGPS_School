import React, { useEffect, useState } from 'react'
import "./SideNav.css"
import { Link } from "react-router-dom"

// Tabler Icons
import { ChevronDown, ChevronRight, BrandCodesandbox } from 'tabler-icons-react';


const SideNav = ({ setOpened }) => {

    // UseState
    const [open, setOpen] = useState(false)
    const [indexDrop, setIndexDrop] = useState()

    // HanldeHide
    const hidden = () => {
        setOpened(false)
        setOpen(false)
    }

    // List Data
    const dropDown = [
        {
            title: "About",
            li: [
                {
                    title: 'About School',
                    path: `/about_founder`
                },
                {
                    title: 'Legacy',
                    path: `/legacy`
                },
                {
                    title: 'Sri Adichunchanagiri Shikshana Trust',
                    path: `/sast`
                },
                {
                    title: 'Message From The Management Members',
                    path: `/message`
                },
                {
                    title: 'Message From The Principal',
                    path: `/principal`
                },
            ]
        },
        {
            title: 'Page Group two',
            li: [
                {
                    title: `Mandatory Disclosures`,
                    path: `/mandatory`
                },
                {
                    title: 'Academics',
                    path: ``
                },
                {
                    title: 'Co-Curriculam',
                    path: `/co_curriculam`
                },
                {
                    title: 'School Zone',
                    path: ``
                },
            ]
        },
        {
            title: 'Page Group three',
            li: [
                {
                    title: 'Sports',
                    path: `/sports`
                },
                {
                    title: 'Student Life',
                    path: `/student_life`
                },
                {
                    title: 'Accolades',
                    path: `/accolades`
                },
                {
                    title: 'Admissions',
                    path: `/admission`
                },
            ]
        }
    ]
    return (
        <div>

            <ul className='side-nav-list'>
                <li onClick={hidden}>
                    <Link className="nav-links" to="/">
                        Home
                    </Link>
                </li>
                <li onClick={hidden}>
                    <Link className="nav-links" to="/about">
                        About
                    </Link>
                </li>
                <li className='drop-down-show' onClick={() => setOpen(!open)}>
                    School {open ? <ChevronDown /> : <ChevronRight />}
                </li>
                <ul className={`Side-Nav-Drop ${open ? "" : 'drop-hide'}`}>
                    {
                        dropDown?.map((value, index) => {
                            return (
                                <div key={index}>
                                    <h5 onClick={() => setIndexDrop(index)}>
                                        {value.title}
                                    </h5>
                                    {value?.li?.map((data, ind) => {
                                        return (
                                            <Link className="nav-links" to={data.path}>
                                                <li key={ind} onClick={hidden}>
                                                    <BrandCodesandbox />   {data.title}
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                </ul>
                <li onClick={hidden}>
                    Contact
                </li>
            </ul>
        </div>
    )
}

export default SideNav
