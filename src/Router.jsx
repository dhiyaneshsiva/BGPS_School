import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Image
import ScrollTop from "./Assets/ScrollTop.png"

// Pages
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import CoCurricular from './Pages/Co-Curricular/Co_Curricular'
import AboutFounder from './Pages/About-Founder/About_Founder'
import Principal from './Pages/Principal/Principal'
import Sast from './Pages/SAST/Sast'
import Mandatory from './Pages/Mandatory/Mandatory'
import Studentlife from './Pages/StudentLife/Studentlife'
import SchoolSports from './Pages/SchoolSports/SchoolSports'
import Accolades from './Pages/Accolades/Accolades'
import Guidelines from './Pages/Guidelines/Guidelines'
import MFM from './Pages/MessageFromManagement/MFM'
import VirtualArts from './Pages/Co-Curricular-Gallery/Virtual-Arts/VirtualArts'
import Yoga from './Pages/Co-Curricular-Gallery/Yoga/Yoga'
import Dance from './Pages/Co-Curricular-Gallery/Dance/Dance'
import Karate from './Pages/Co-Curricular-Gallery/Karate/Karate'
import Music from './Pages/Co-Curricular-Gallery/Music/Music'
import Academics from './Pages/Academics/Academics'
import Legacy from './Pages/Legacy/Legacy'
import Careers from './Pages/Careers/Careers'
import SchoolZones from './Pages/SchoolZone/SchoolZones'
import SchoolZone from './Pages/SchoolZone/SchoolZone'
import WellBeing from './Pages/WellBeing/WellBeing'
import Staff from './Pages/Staffs/Staff'
import Login from './Dashboard/Loginpage.jsx/Login'
import DsFlashNews from './Dashboard/homepage/FlashNews/DsFlashNews'

const Router = () => {

    // Window Scroll
    const Scroll = () => window.scrollTo(0, 0)

    window.addEventListener('scroll', () => {
        const AddClass = document.querySelector('.scroll-btn-fixed')
        const Value = window.scrollY
        if (Value > 1000) {
            AddClass.classList.add('show-icon')
        }
        else {
            AddClass.classList.remove('show-icon')
        }
    })
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/mandatory">
                    <Mandatory />
                </Route>
                <Route path="/about_founder">
                    <AboutFounder />
                </Route>
                <Route path="/accolades">
                    <Accolades />
                </Route>
                <Route path="/co_curriculam">
                    <CoCurricular />
                </Route>
                <Route path="/sast">
                    <Sast />
                </Route>
                <Route path="/principal">
                    <Principal />
                </Route>
                <Route path="/student_life">
                    <Studentlife />
                </Route>
                <Route path="/sports">
                    <SchoolSports />
                </Route>
                <Route path="/message">
                    <MFM />
                </Route>
                <Route path="/virtualarts">
                    <VirtualArts />
                </Route>
                <Route path="/yoga">
                    <Yoga />
                </Route>
                <Route path="/music">
                    <Music />
                </Route>
                <Route path="/dance">
                    <Dance />
                </Route>
                <Route path="/karate">
                    <Karate />
                </Route>
                <Route path="/admission">
                    <Guidelines />
                </Route>
                <Route path="/academics">
                    <Academics />
                </Route>
                <Route path="/legacy">
                    <Legacy />
                </Route>
                <Route path="/career">
                    <Careers />
                </Route>
                <Route path="/schoolzone">
                    <SchoolZones />
                </Route>
                <Route path="/facilities">
                    <SchoolZone />
                </Route>
                <Route path="/wellbeing">
                    <WellBeing />
                </Route>
                <Route path="/Staff">
                    <Staff />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/dshome">
                    <DsFlashNews /> 
                </Route>
            </Switch>
            {/*  */}
            <div onClick={Scroll} className='scroll-btn-fixed'>
                <div className='scroll-btn-img'>
                    <img src={ScrollTop} alt="Top" />
                </div>
            </div>
        </div>
    )
}

export default Router
