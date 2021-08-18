import React from "react"
import { HashRouter } from "react-router-dom"
import "./components/CustomComponents.css"
import "./components/utilities.css"
import "./App.css"

import Aside from './components/template/Aside'
import Header from './components/template/Header'

function App() {

    return (
        <HashRouter>
            <Aside/>
            <Header/>
        </HashRouter>
    )
}

export default App
