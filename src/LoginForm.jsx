import React, {useState} from "react";

import './styles/login.css';
import appFirebase from "./Credenciales-fb";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase)

const LoginFormComp = () => {
    
    const[registrando, setRegistrando] = useState(false)

    const funcAutenticacion = async(e) =>{
        e.preventDefault();

        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if(registrando){
            try{
                await createUserWithEmailAndPassword(auth, correo, contraseña)
            } catch(error){
                alert("Asegurese que la contraseña tenga más de 8 caracteres")
            }
        }

        else{
            try{
                await signInWithEmailAndPassword(auth, correo, contraseña)
            } catch(error){
                alert("El correo o contraseña son incorrectos")
            }
        }
    }

    return(
        <div className="login">
            <div className="login-cont">

                <div className="title">
                    <h1>Bienvenido</h1>
                </div>

                <div className="form">
                    <div className="form-logo">
                        <img 
                        src='https://site.trucapitals.com/wp-content/uploads/2024/09/icono.png'
                        alt='form-logo'
                        width={80}
                        height={80}
                        className="logo-formulario"
                        />
                    </div>

                    <form onSubmit={funcAutenticacion}>
                        <input
                        type="text"
                        className="form-user"
                        name="username"
                        placeholder="Usuario"
                        id="email"
                        />

                        <br></br>
                        <br></br>

                        <input
                        type="password"
                        className="form-cont"
                        name="password"
                        placeholder="Contraseña"
                        id="password"
                        />

                        <br></br>

                            <button className="btn-form">{registrando ? "Registrate" : "Inicia Sesión"}</button>
                    </form>

                    <h4 className="btn-disp-none">{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}
                    <button className="btn-registrer-login" onClick={() => setRegistrando(!registrando)}>
                        {registrando ? "Inicia Sesión" : "Registrate"}
                    </button>

                    </h4>
                </div>
            </div>

        </div>
    )
}

export default LoginFormComp;