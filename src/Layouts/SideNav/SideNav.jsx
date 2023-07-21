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
                'About School',
                'Legacy',
                'Sri Adichunchanagiri Shikshana Trust',
                'Message From The Management Members',
                'Message From The Principal'
            ]
        },
        {
            title: 'Page Group two',
            li: [
                'Mandatory Disclosures',
                'Academics',
                'Co-Curriculam',
                'School Zone'
            ]
        },
        {
            title: 'Page Group three',
            li: [
                'Students Buzz',
                'Student Life',
                'Accolades',
                'Admissions'
            ]
        }
    ]
    return (
        <div>

            <ul className='side-nav-list'>
                <li onClick={hidden}>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li onClick={hidden}>
                    <Link to="/about">
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
                                            <li key={ind}>
                                                <BrandCodesandbox />   {data}
                                            </li>
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
