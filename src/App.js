import React from "react"
import { HashRouter } from "react-router-dom"
import "./components/CustomComponents.css"
import "./components/utilities.css"
import "./App.css"

import Aside from './components/template/Aside'
import Header from './components/template/Header'
import Settings from "./pages/Settings/Settings"

function App() {

    return (
        <HashRouter>
            <Aside/>
            <Header/>
            <Settings/>
        </HashRouter>
    )
}

export default App
