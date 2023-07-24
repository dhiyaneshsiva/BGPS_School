import React, { useEffect, useRef, useState } from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom"

// Images
import Logo from "../../Assets/logo.png"

// Tabler Icons
import { ChevronDown, BrandCodesandbox } from 'tabler-icons-react';

const NavBar = () => {

  // UseState
  const [hide, setHide] = useState(false)

  // Handler
  const handleClick = () => {
    setHide(!hide)
  }
  const hidden = () => {
    setHide(false)
  }

  // Nav List
  const ulList = [
    {
      title: 'Home',
      handler: hidden,
      route: '/'
    },
    {
      title: 'About',
      handler: hidden,
      route: '/about'
    },
    {
      title: 'School',
      icon: <ChevronDown />,
      handler: handleClick,
      route:'/about'
    },
    {
      title: 'Contact',
      handler: hidden,
      route: '/contact'
    },
  ]

  // Drop Down
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
      ],
      handler: hidden
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
      ],
      handler: hidden
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
          path: ``
        },
      ],
      handler: hidden
    }
  ]


  // useReff
  const refValue = useRef()

  // HandleOutClick
  useEffect(() => {
    const handleOutClick = (e) => {
      if (!refValue.current.contains(e.target)) {
        setHide(false)
      }
    }
    document.addEventListener('mousedown', handleOutClick)
    return () => {
      document.removeEventListener('mousedown', handleOutClick)
    }
  })

  return (
    <>
      <div className='nav-flex'>
        <div className='Nav-logo'>
          <img src={Logo} alt='Logo' />
        </div>
        <div className='Nav-list'>
          <ul>
            {
              ulList?.map((value, index) => {
                return (
                  <>
                    <li onClick={value.handler} key={index} className='Nav-lists'>
                      <Link to={value?.route} className='router-link'>
                        {value.title} {value.icon}
                      </Link>
                    </li>
                  </>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className={`drop-down ${hide ? "" : 'hide-drop-down'}`} ref={refValue}>
        <ul
          data-aos="fade-down"
          data-aos-delay="2000ms"
          data-aos-duration="2000ms">
          {
            dropDown?.map((value, index) => {
              return (
                <div key={index}>
                  <h2>
                    {value.title}
                  </h2>
                  {value?.li?.map((list, index) => {
                    return (
                      <>
                        <Link to={list.path} className="router-link" onClick={value.handler}>
                          <li key={index}>
                            <BrandCodesandbox /> {list.title}
                          </li>
                        </Link>
                      </>
                    )
                  })}
                </div>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default NavBar
