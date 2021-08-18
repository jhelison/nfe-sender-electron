import React from "react"
import Modal from "react-modal"

import { CustomButton } from './CustomComponents'

import { FiX } from "react-icons/fi"

const MessageModal = (props) => {
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            className="modal"
            overlayClassName="modal-overlay"
        >
            <h2>{props.title}</h2>
            <hr class="solid"/>
            <label className="mt-5">{props.text}</label>
            <hr class="solid"/>

            <div className="d-flex just-content-end grid-gap-10 mt-10">
                {props.backButton ? (
                    <CustomButton
                        title="Cancelar"
                        onClick={props.onRequestClose}

                        icon={FiX}
                    />
                ) : null}
                {props.extraButton}
            </div>
        </Modal>
    )
}

export default MessageModal
