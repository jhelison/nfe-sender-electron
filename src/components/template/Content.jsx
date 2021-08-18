import React from "react"
import "./Content.css"

import { FiChevronLeft } from "react-icons/fi"

const iconSize = "23px"

const Content = (props) => {
    return (
        <main>
            <div className="d-flex flex-column m-20">
                {props.goBack ? (
                    <div
                        className="main-back-button d-flex flex-center"
                        onClick={props.goBackOnClick}
                    >
                        <FiChevronLeft size={iconSize} />
                    </div>
                ) : null}
                <h1 className={props.goBack ? "ml-10" : ""}>{props.title}</h1>

                <section>{props.children}</section>

                {props.footer ? (
                    <section>
                        <hr className="solid" />
                        {props.footer}
                    </section>
                ) : null}
            </div>
        </main>
    )
}

export default Content
