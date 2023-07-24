import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Pages
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Co_Curricular from './Pages/Co-Curricular/Co_Curricular'
import About_Founder from './Pages/About-Founder/About_Founder'
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

const Router = () => {
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
                    <About_Founder />
                </Route>
                <Route path="/accolades">
                    <Accolades />
                </Route>
                <Route path="/co_curriculam">
                    <Co_Curricular />
                </Route>
                <Route path="/legacy">
                    <Guidelines />
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
            </Switch>
        </div>
    )
}

export default Router
