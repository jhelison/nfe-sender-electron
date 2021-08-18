import React from "react"

import { FiChevronLeft } from "react-icons/fi"

const iconSize = "23px"

const Content = (props) => {
    return (
        <main>
            <div className="d-flex align-items-center mt-20 ml-10">
                {props.goBack ? (
                    <div className="main-back-button d-flex just-content-center align-items-center"
                    onClick={props.goBackOnClick}>
                        <FiChevronLeft size={iconSize} />
                    </div>
                ) : null}
                <h1 className={props.goBack ? "ml-10" : ""}>{props.title}</h1>
                <div className="main-children-container">
                    {props.children}
                </div>
            </div>
        </main>
    )
}

export default Content
