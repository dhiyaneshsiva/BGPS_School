import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

// Mantine UI
import { MantineProvider } from '@mantine/core';
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

// Pages
import App from './App'

ReactDOM.render(
    <HashRouter>
        <MantineProvider withNormalizeCSS withGlobalStyles>
            <ModalsProvider>
                <Notifications position="top-right" zIndex={2077} limit={5} />
                <App />
            </ModalsProvider>
        </MantineProvider>
    </HashRouter>
    ,
    document.getElementById('root')
)