import React, { useState } from "react";

import appFirebase from "./Credenciales-fb";
import {getAuth, onAuthStateChanged} from 'firebase/auth'

import LoginFormComp from "./LoginForm";
import DashPrincipal from "./DashPrincipal";

const auth = getAuth(appFirebase)

function FireBaseFormTru(){
    //variable de estado
    const [usuario, setUsuario] = useState(null);

    onAuthStateChanged(auth, (usuarioFirebase)=>{
        if(usuarioFirebase){
            setUsuario(usuarioFirebase)
        }
        else{
            setUsuario(null)
        }
    })

    return(
        <div>
            {usuario ? <DashPrincipal correoUsuario ={usuario.email} /> : <LoginFormComp />}
        </div>
    )
}

export default FireBaseFormTru;