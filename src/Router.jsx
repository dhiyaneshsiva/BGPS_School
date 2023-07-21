import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Pages
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Co_Curricular from './Pages/Co-Curricular/Co_Curricular'
import About_Founder from './Pages/About-Founder/About_Founder'
import Principal from './Pages/Principal/Principal'
import Founder1 from './Pages/Founders/Founder1'
import Founder2 from './Pages/Founders/Founder2'
import Founder3 from './Pages/Founders/Founder3'
import Sast from './Pages/SAST/Sast'
import Mandatory from './Pages/Mandatory/Mandatory'
import Studentlife from './Pages/StudentLife/Studentlife'
import SchoolSports from './Pages/SchoolSports/SchoolSports'
import Accolades from './Pages/Accolades/Accolades'
import Guidelines from './Pages/Guidelines/Guidelines'

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
                    <Founder1 />
                </Route>




                {/* <Founder2 /> */}
                {/* <Founder3 /> */}
            </Switch>
        </div>
    )
}

export default Router
