import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom"
import {ThemeProvider} from "styled-components"
import theme from "./theme"

ReactDOM.render((
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>
), document.getElementById("root"))
registerServiceWorker()
