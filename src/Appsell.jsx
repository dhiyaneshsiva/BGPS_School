import React, { useEffect, useState } from 'react'

// Mantine UI
import { AppShell, Burger, Header, MediaQuery, Navbar, ScrollArea, } from '@mantine/core';
import NavBar from './Layouts/HeaderNav/NavBar';

// Animation 
import AOS from 'aos';
import 'aos/dist/aos.css';
import SideNav from './Layouts/SideNav/SideNav';
import { useMediaQuery } from '@mantine/hooks';
import Router from './Router';

const Appsell = () => {

    // useState
    const [opened, setOpened] = useState(false);

    // Animation Init
    AOS.init()


    // Media Query
    const Query = useMediaQuery('(max-width:768px)')


    useEffect(() => {
        if (!Query) {
            setOpened(false)
        }
    },[Query])



    return (
        <div>
            <AppShell
                padding={0}
                m={0}
                navbarOff
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                navbar={
                    <Navbar style={{ backgroundColor: " #4527a0" }} hiddenBreakpoint="sm" height={'100%'} hidden={!opened} width={{ sm: 0, lg: 0 }}>
                        <ScrollArea>
                            {Query ? <SideNav setOpened={setOpened} /> : ""}
                        </ScrollArea>
                    </Navbar>
                }
                header={
                    < Header
                        height={{ base: 50, md: 70 }}
                        style={{ background: 'linear-gradient(to right, #0D0A27, #281B89, #181250)' }} >
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size="sm"
                                    mr="xl"
                                    pl={20}
                                    color='white'
                                />
                            </MediaQuery>
                            <NavBar />
                        </div>
                    </Header>
                }
            >
                <Router />
            </AppShell >
        </div >
    )
}

export default Appsell
