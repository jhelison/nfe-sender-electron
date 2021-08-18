import React from 'react'
import './Header.css'
import { FiMinus } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import {showNotification} from '../../util/notification'

const electron = window.require("electron")
var currentWindow = electron.remote.getCurrentWindow()

const Header = (props) => {

    const minimizeWindow = () => {
        currentWindow.minimize()
    }

    const closeWindow = () => {
        currentWindow.hide()
        showNotification("Aplicativo minimizado no tray")
    }

    return (
        <header className="d-flex just-content-end">
            <div className="drag-region"/>
            <button className="d-flex flex-center"
                onClick={minimizeWindow}><FiMinus/></button>
            <button className="d-flex flex-center"
                onClick={closeWindow}><FiX/></button>
            <div></div>
        </header>
    )
}

export default Header