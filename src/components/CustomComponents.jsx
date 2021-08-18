import React from "react"
import InputMask from "react-input-mask"
import "./CustomComponents.css"
import "./utilities.css"

export const Loading = (props) => {
    return (
        <div class="loader"></div>
    )
}

export const CustomButton = (props) => {
    const getColor = () => {
        if (props.sucess) {
            return "--status-sucess"
        } else if (props.danger) {
            return "--status-danger"
        } else if (props.alert) {
            return "--status-alert"
        } else if (props.secondary) {
            return "--status-secondary"
        } else {
            return "--status-secondary"
        }
    }

    const renderLabel = () => {
        if (props.label) {
            return (
                <label
                    style={{
                        color: props.outline ? `var(${getColor()})` : "",
                        visibility: props.loading ? "hidden" : ""
                    }}
                >
                    {props.label}
                </label>
            )
        }
        return
    }

    const renderIcon = () => {
        if (props.icon) {
            return (
                <div
                className="d-flex flex-center"
                style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: props.label
                        ? "rgba(0, 0, 0, 0.1)"
                        : "",
                    color: props.outline ? `var(${getColor()})` : "",
                    visibility: props.loading ? "hidden" : ""
                }}
            >
                {<props.icon size={props.iconSize ? props.iconSize : 20} />}
                </div>
            )
        }
        return
    }

    return (
        <button
            className={"d-flex flex-center custom-button"}
            style={{
                backgroundColor: props.outline ? "" : `var(${getColor()})`,
                border: props.outline ? `2px solid var(${getColor()})` : "",
            }}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {renderLabel()}
            {renderIcon()}
            {props.loading ? <Loading /> : null}
        </button>
    )
}

export const CustomSelect = (props) => {
    return (
        <select
            className={
                "custom-input pl-10 " +
                (props.error ? " custom-input-error" : "")
            }
        >
            {props.children}
        </select>
    )
}

export const CustomTextInput = (props) => {
    return (
        <InputMask
            id={props.id}
            spellCheck="false"
            placeholder={props.placeholder}
            className={
                "custom-input pl-10" +
                (props.error ? " custom-input-error" : "")
            }
            mask={props.mask}
            maskChar={props.maskChar}
        />
    )
}
