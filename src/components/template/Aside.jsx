import React, { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import './Aside.css'

import MessageModal from "../MessageModal"
import { CustomButton } from "../CustomComponents"

import { FiSettings } from "react-icons/fi"
import { FiLogOut } from "react-icons/fi"
import { BsBuilding } from "react-icons/bs"
import { FiPower } from "react-icons/fi"


import NFeIcon from "../../assets/cmm-sistemas-selo-nfe.svg"

const iconSize = "23px"

const Aside = (props) => {
    const [isModal, setIsModal] = useState(false)

    let history = useHistory()
    let location = useLocation()

    useEffect(() => {
        removeAllSelect()
        updateSelectByUrl()
    }, [location])

    const removeAllSelect = () => {
        let elements = document.getElementsByClassName("aside-button")
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).classList.remove("aside-button-selected")
        }
    }

    const updateSelectByUrl = () => {
        if (location.pathname === "/") {
            const ele = document.getElementById("aside-settings")
            ele.classList.toggle("aside-button-selected")
        } else if (location.pathname.startsWith("/companies")) {
            const ele = document.getElementById("aside-companies")
            ele.classList.toggle("aside-button-selected")
        }
    }

    const updateURL = (url) => {
        if (location.pathname !== url) history.push(url)
    }

    const closeApp = () => {
        window.close()
    }

    return (
        <aside className="d-flex align-items-center flex-column just-content-space-bet">
            <MessageModal
                isOpen={isModal}
                onRequestClose={() => setIsModal(false)}
                backButton
                title="Fechar"
                text="Isso fechara o programa, encerrando o gerenciamento de notas fiscais"
                extraButton={
                    <CustomButton title="Encerrar" danger icon={FiPower} onClick={closeApp}/>
                }
            />
            <div className="d-flex align-items-center flex-column">
                <div className="mt-10">
                    <img className="nfe-logo " src={NFeIcon} alt="NFe logo" />
                </div>

                <div className="mt-18">
                    <button
                        className="d-flex flex-center aside-button"
                        id="aside-settings"
                        onClick={() => updateURL("/")}
                    >
                        <FiSettings size={iconSize} />
                    </button>
                    <button
                        className="d-flex flex-center aside-button mt-20"
                        id="aside-companies"
                        onClick={() => updateURL("/companies")}
                    >
                        <BsBuilding size={iconSize} />
                    </button>
                </div>
            </div>

            <div className="d-flex flex-center flex-column">
                <div className="d-flex flex-center flex-column mb-20">
                    <div className="status-ball bg-color-sucess" />
                    <span>Status Servidor</span>
                </div>
                <div className="d-flex flex-center flex-column mb-20">
                    <div className="status-ball bg-color-danger" />
                    <span>Status Sefaz</span>
                </div>
                <button
                    className="d-flex flex-center aside-button mb-10"
                    onClick={() => setIsModal(true)}
                >
                    <FiLogOut size={iconSize} />
                </button>
            </div>
        </aside>
    )
}

export default Aside
