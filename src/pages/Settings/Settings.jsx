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
            <form>
                    <CustomTextInput label="Diretório geral para gerenciamentos dos arquivos XML" id="main-path" inputText="Selecionar pasta" isButton/>

            </form>
            <div className="d-grid grid-1-1 gap-10">
                    <CustomTextInput label="asd" inputText="Selecionar" isButton onClick={() => console.log("wow")}/>
            </div>
                    <CustomButton label="ASD" sucess/>
        </Content>
    )
}

export default Settings
