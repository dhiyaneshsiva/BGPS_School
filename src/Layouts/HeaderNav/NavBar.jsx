import React, { useEffect, useRef, useState } from 'react'
import "./NavBar.css"
import { Link, useHistory } from "react-router-dom"

// Images
import Logo from "../../Assets/logo.png"

// Tabler Icons
import { ChevronDown, BrandCodesandbox, UserCircle } from 'tabler-icons-react';

const NavBar = () => {

  // UseState
  const [hide, setHide] = useState(false)
  const [servicePath, setServicePath] = useState('')

  // Handler
  const handleClick = () => {
    setHide(!hide)
  }
  const hidden = () => {
    setHide(false)
  }

  const History = useHistory()

  const Ahref = () => {
    return (
      <li>
        Apply Now
      </li >
    )
  }

  const ApplicationForm = () => {
    window.open('https://campus.uno/applicationregistration/bgsps', '_blank');
  }

  console.log(History.location.pathname);
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
      route: History.location.pathname
    },
    {
      title: 'Events',
      handler: hidden,
      route: '/'
    },
    {
      title: Ahref(),
      handler: ApplicationForm,
      route: servicePath
    },
    {
      title: 'Contact',
      handler: hidden,
      route: '/contact'
    },
    {
      title: <UserCircle
        size={40}
        strokeWidth={1}
        color={'white'}
      />,
      handler: hidden,
      route: "/login"
    }
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
          path: `/academics`
        },
        {
          title: 'Co-Curriculam',
          path: `/co_curriculam`
        },
        {
          title: 'School Zone',
          path: `/schoolzone`
        },
        {
          title: 'Careers',
          path: `/career`
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
          path: `/admission`
        },
        {
          title: 'Staff Details',
          path: `/staff`
        },
      ],
      handler: hidden
    }
  ]


  // useReff
  const refValue = useRef()
  const Path = useHistory()

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

  useEffect(() => {
    setServicePath(Path.location.pathname)
  }, [Path.location.pathname])

  return (
    <>
      <div className='nav-flex'>
        <div className='Nav-logo'>
          <img
            data-aos="fade-right"
            data-aos-delay='200'
            data-aos-duration="1000"
            data-aos-once="true"
            src={Logo} alt='Logo' />
        </div>
        <div className='Nav-list'>
          <ul>
            {
              ulList?.map((value, index) => {
                const aosDelay = index * 200;
                const aosDuration = 1000;
                return (
                  <li
                    data-aos="fade-left"
                    data-aos-delay={`${aosDelay}`}
                    data-aos-duration={`${aosDuration}`}
                    data-aos-once="true"
                    onClick={value.handler}
                    key={index}
                    className='Nav-lists'>
                    <Link to={value?.route} className='router-link'>
                      {value.title} {value.icon}
                    </Link>
                  </li>
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
