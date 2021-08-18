import React from "react"
import Content from "../../components/template/Content"

import { FiSearch } from "react-icons/fi"

import {
    CustomTextInput,
    CustomButton,
} from "../../components/CustomComponents"

const Settings = (props) => {
    return (
        <Content title="Configurações Gerais">
            <div className="d-grid grid-1-1 gap-10">
                    <CustomTextInput disabled label="asd" inputText="asd" isButton />
                    <CustomTextInput label="asd"/>
            </div>
        </Content>
    )
}

export default Settings
