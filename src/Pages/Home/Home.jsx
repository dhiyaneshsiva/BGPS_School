import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import "./Home.css"

// Images
import Logo from "../../Assets/logo.png"
import Peakcock from "../../Assets/top_right.png"
import green_Box from "../../Assets/green.png"
import Bgs_Letter from "../../Assets/bgs.png"
import Girl from "../../Assets/avatar.png"

// Topper Images
import top1 from "../../Assets/top1.png"
import top2 from "../../Assets/top2.png"
import top3 from "../../Assets/top3.png"
import top4 from "../../Assets/top4.png"
import top5 from "../../Assets/top5.png"
import top6 from "../../Assets/top6.png"
import top7 from "../../Assets/top7.png"
import top8 from "../../Assets/top8.png"
import top9 from "../../Assets/top9.png"
import top10 from "../../Assets/top10.png"
import top11 from "../../Assets/top11.png"
import top12 from "../../Assets/top12.png"

// Images
import Line from "../../Assets/Path.png"
import Rectangle from "../../Assets/Rectangle.png"
import Polygan from "../../Assets/Polygon.png"


// Mantine Query
import { useMediaQuery, useDisclosure } from '@mantine/hooks'
import { DateInput } from '@mantine/dates';
import { Button, Center, Input, Modal, Select } from '@mantine/core'

// Tabler Icons
import { ChevronDown, DiscountCheck, FaceIdError } from 'tabler-icons-react'

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  // Toppers Data
  const data = [
    {
      icon: top1,
      name: "Lakshana",
      mark: "99%",
    },
    {
      icon: top2,
      name: "Shruthi",
      mark: "98%",
    },
    {
      icon: top3,
      name: "Akshay",
      mark: "96%",
    },
  ];


  const list = [
    {
      icon: top4,
      name: "Lakshana",
      mark: "99%",
    },
    {
      icon: top5,
      name: "Lakshana",
      mark: "99%",
    },
    {
      icon: top6,
      name: "Lakshana",
      mark: "99%",
    },
    {
      icon: top7,
      name: "Lakshana",
      mark: "99%",
    },
    {
      icon: top8,
      name: "Lakshana",
      mark: "99%",
    },
    {
      icon: top9,
      name: "Lakshana",
      mark: "99%",
    },
    {
      icon: top10,
      name: "Lakshana",
      mark: "99%",
    },
    {
      icon: top11,
      name: "Lakshana",
      mark: "99%",
    },
    {
      icon: top12,
      name: "Lakshana",
      mark: "99%",
    },
  ];

  const [marquee, setMarquee] = useState([`Admission's Open Register Now`])
  const Query = useMediaQuery('(max-width:400px)')
  const [formModal, setFormModal] = useState(true)
  const [modalOpened, { open, close }] = useDisclosure(true);
  const [formResultModal, setFormResultModal] = useState(false);
  const [errors, setErrors] = useState(false)

  const [studentsData, setStudentsData] = useState({
    name: '',
    classStandard: '',
    parentsName: '',
    dateOfBirth: '',
    emailId: '',
    number: ''
  })


  const submitForm = (e) => {
    e.preventDefault()
    if (studentsData.name === '' || studentsData.parentsName === '' || studentsData.classStandard === '' || studentsData.dateOfBirth === ''
      || studentsData.emailId === '' || studentsData.number === '') {
      setErrors(true)
      setFormResultModal(true)
      setInterval(() => {
        setFormResultModal(false)
      }, 3000)
    }
    else {
      setErrors(false)
      setFormResultModal(true)
      setFormModal(false)
      setInterval(() => {
        setFormResultModal(false)
      }, 3000)
      setInterval(() => {
        localStorage.removeItem('form')
      }, 60 * 1000)
      window.localStorage.setItem('form', true)
    }
  }

  useEffect(() => {
    if (window.localStorage.getItem('form')) {
      setFormModal(false)
    }
  })


  const MarqueeLoop = () => {
    let result = ''
    for (var i = 0; i <= 5; i++) {
      result += marquee;
      if (i < 15 - 1) {
        for (let j = 0; j < 15; j++) {
          result += '\u00A0';
        }
      }
    }
    return (
      result
    )
  }
  return (
    <div>
      <Modal zIndex={1099} onClose={close} opened={formResultModal} centered withCloseButton={false} className='Error-modal' >
        <Center>
          {
            errors ? (
              <FaceIdError size={'15rem'} strokeWidth={1} color="red" />
            ) : (
              <DiscountCheck size={'15rem'} strokeWidth={1} color="Green" />
            )
          }
        </Center>
        <Center>
          {
            errors ? (
              <div style={{ color: 'red' }}>
                Please Fill all Inputs
              </div>
            ) : (
              <div style={{ color: 'green' }}>
                Send Successfully
              </div>
            )
          }
        </Center>
      </Modal>
      <Modal
        size={800}
        opened={formModal}
        onClose={() => (setFormModal(false), close)}
        title="Admission Form"
        className='pop-up-modal'
        centered>
        <div className='modal-form'>
          <form onSubmit={submitForm}>
            <Input
              placeholder="Child's Name"
              size="md"
              onChange={(e) => setStudentsData({ ...studentsData, name: e.target.value })}
            />
            <br />
            <DateInput
              placeholder="Child's Date of Birth"
              mx="auto"
              size="md"
              valueFormat="DD MMM YYYY"
              minDate='2000-02-26'
              maxDate={new Date()}
              onChange={(e) =>
                setStudentsData({ ...studentsData, dateOfBirth: new Date(e).toLocaleDateString() })
              }
            />
            <br />
            <Select
              clearable
              onChange={(e) =>
                setStudentsData({ ...studentsData, classStandard: e })
              }
              size="md"
              rightSection={<ChevronDown size="1rem"
                strokeWidth={0.5} />}
              dropdownPosition="bottom"
              placeholder="Admission for Class"
              data={['Nursery', 'LKG', 'UKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII',
                'VIII', 'IX', 'X', 'XI']}
              className='modal-form-autocomplete'
            />
            <br />
            <Input
              placeholder="Parent's Name"
              size="md"
              onChange={(e) => setStudentsData({ ...studentsData, parentsName: e.target.value })}
            />
            <br />
            <Input
              placeholder="Email Id"
              size="md"
              onChange={(e) => setStudentsData({ ...studentsData, emailId: e.target.value })}
            />
            <br />
            <Input
              placeholder="Contact Number"
              size="md"
              onChange={(e) => setStudentsData({ ...studentsData, number: e.target.value })}
            />
            <br />
            <Center>
              <Button onClick={submitForm}>Submit</Button>
            </Center>
          </form>
        </div>
      </Modal>

      <marquee direction="left" className="marquee">
        {MarqueeLoop()}
      </marquee>

      {/* Section 1 */}

      <div className='sec-1'>
        <div className='sec-1-left'>
          <div className='sec-1-left-1'>
            <div className='sec-1-left-1-img'>
              <img src={Logo} alt='Logo' />
            </div>
            <div className='sec-1-left-1-content'>
              <p>
                Sri Adichanagiri
              </p>
              <p>
                B G S Public School
              </p>
              <p>
                Affiliated To CSE New Delhi,
                Affiliation NO. 830254
              </p>
            </div>
          </div>
          <div className='sec-1-left-2'>
            <h2>"Service to mankind </h2>
            <h2> &nbsp;is service to God"</h2>
          </div>
          <div className='sec-1-left-3'>
            <p>
              BGS Public School, which was founded in 2006 by His Holiness Padma {Query ? "" : <br />}
              Bhushana Jadaguru Sri Sri Sri Dr. Balagangadharanatha Swamiji {Query ? "" : <br />}
              under the aegis of Sri Adichunchanagiri Shikshana Trust, {Query ? "" : <br />}
            </p>
          </div>
        </div>
        <div className='sec-1-right'>
          <div className='sec-1-right-peacock'>
            <img src={Peakcock} alt="Peacock" />
          </div>
        </div>
      </div>
      {/* Section 1 End */}

      {/* Section 2 */}


      <div className='sec-2'>
        <div className='sec-2-left'>
          <div className='sec-2-left-title'>
            <h3>
              Welcome to BGS <br />
              Public School
            </h3>
          </div>
          <div className='sec-2-left-content'>
            <p>
              BGS Public School, which was founded in 2006
              by His Holiness Padma
              Bhushana Jagadguru Sri Sri Sri Dr.Balagangadharanatha
              Swamiji under the
              aegis of Sri Adichunchanagiri Shikshana Trust&#174;,
              is a co-educational day school.
              It occupies a prominent place in the 60acres of BGS Health
              and Educational City
              campus on Uttarahalli Road, away from the hustle and the
              bustle of the city but
              also among the parent community of West and South Bangalore
            </p>
          </div>
          <div className='sec-2-left-button'>
            <button>
              <Link style={{ textDecoration: "none", color: "black" }} to='/about'>
                See More
              </Link>
            </button>
          </div>
        </div>
        <div className='sec-2-right'>
          <div className='sec-2-right-box'>
            <img src={green_Box} alt="box" />
            <img src={Bgs_Letter} alt='BGS' />
          </div>
          <div className='sec-2-right-content'>
            <div className='sec-2-right-title'>
              <h1>
                Our Mission
              </h1>
            </div>
            <div className='sec-2-right-para'>
              To provide excellent child-centered and value-based
              education to all the children in our care so
              that they grow up to be knowledgeable,
              responsive and self-confident individuals who are
              prepared to face the challenges of life with
              integrity and equanimity
            </div>
          </div>
          <div className='sec-2-right-girl'>
            <img src={Girl} alt='Avatar' />
          </div>
        </div>
      </div>


      {/* Section 2 End */}



      {/* Section 3  */}


      <div className='sec-3'>
        <div className='sec-3-top'>
          <div className='sec-3-top-left'>
            <h1>
              School Topper's
            </h1>
            <p>
              <i>
                Congratulate All The Students For <br />
                Their Outstanding Performance
              </i>
            </p>
          </div>
          <div className='sec-3-top-right'>
            <div className='sec-3-top-right-top'>
              <h3>
                CLASS
              </h3>
              <h1>
                10
              </h1>
              <h3>
                RESULTS
              </h3>
            </div>
            <div className='sec-3-top-right-bottom'>
              <h1>
                CBSE
              </h1>
            </div>
          </div>
        </div>
        <div className='sec-3-bottom'>
          <div className='sec-3-bottom-top3'>
            {
              data?.map((value, index) => {
                return (
                  <>
                    <div key={index}
                      className='sec-3-bottom-toppers-container'>
                      <div className='sec-3-bottom-toppers-img'>
                        <img src={value.icon} alt='Imag' />
                      </div>
                      <h1>
                        {value.name}
                      </h1>
                      <i>
                        {value.mark}
                      </i>
                    </div>
                  </>
                )
              })
            }
          </div>
          <div className='sec-3-bottom-toppers-2'>
            {
              list?.map((value, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className='sec-3-bottom-toppers-container'>
                      <div className='sec-3-bottom-toppers-img'>
                        <img src={value.icon} alt='Images' />
                      </div>
                      <h1>
                        {value.name}
                      </h1>
                      <i>
                        {value.mark}
                      </i>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>


      {/* Section 3 End */}


      {/* Section 4  */}


      <div className='sec-4'>
        <div className='sec-4-container'>
          <div className='sec-4-container-1'>
            <img src={Line} alt='Line' />
          </div>
          <div className='sec-4-container-2'>
            <h1>
              Welcome to BGS Public School
            </h1>
            <i>
              <p>
                BGS Public School, which was founded
                in 2006 by His Holiness Padma Bhusana
                Jagadguru Sri Sri Sri Dr. Balagangadharantha
                Swamiji under the aegis of Sri
                Adichunchanagiri Shikshana Trust@,
                is a co-educational day school. It
                occupies a prominent place in the 60
                acres of BGS Health and Education City
                campus on Uttarahali Road, away from the
                hustle and the bustle of the city but also
                among the parent community of West adn South
                Bangalore.
              </p>
            </i>
          </div>
          <div className='sec-4-container-3'>
            <img src={Rectangle} alt='Img' />
            <img src={Polygan} alt='Img' />
          </div>
          <div className='sec-4-container-4'>
            <input placeholder='Type here.....' />
            <button>
              Submit
            </button>
          </div>
          <div className='sec-4-container-5'>
            <div className='sec-4-container-5-title'>
              <h1>
                Register Now
              </h1>
            </div>
            <div className='sec-4-container-5-form'>
              <form>
                <input className='form-input' placeholder='Name' />
                <input className='form-input' placeholder='Email' />
                <input className='form-input' placeholder='Phone No' />
                <input className='form-input' placeholder='Message' />
                <button>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* Section 4 End */}
    </div>
  )
}

export default Home
