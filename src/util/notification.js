const electron = window.require("electron")
var remote = electron.remote
const { Notification } = window.require('electron')

const TITLE="NFe"

// import "../assets/info.png"

function showNotification (text, iconType = null, asProcess = false) {
    var icon = ""
    if(iconType === "error"){
        icon = "src/assets/error.png"
    }
    else if(iconType === "sucess"){
        icon = "src/assets/sucess.png"
    }
    else{
        icon = "src/assets/info.png"
    }

    if(asProcess){
        new Notification({ title: TITLE, body: text, icon }).show()
    }
    else{
        remote.Notification({ title: TITLE, body: text, icon }).show()
    }
}

export { showNotification }