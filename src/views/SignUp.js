import React, { Component } from "react";
import '../assets/css/bootstrap.min.css'
import '../assets/css/Login.css'

export default class SignUp extends Component {
    render() {
        return (
            <form className="login-form">
                <h3>Registro</h3>

                <br />

                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" placeholder="Escriba su nombre" />
                </div>

                <div className="form-group">
                    <label>Apellidos</label>
                    <input type="text" className="form-control" placeholder="Escriba sus apellidos" />
                </div>

                <div className="form-group">
                    <label>Correo electrónico</label>
                    <input type="email" className="form-control" placeholder="Escriba su correo electrónico" />
                </div>

                <div className="form-group">
                    <label>Contarseña</label>
                    <input type="password" className="form-control" placeholder="Escriba su contarseña" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Registrarse</button>

                <br />

                <p className="forgot-password text-right">
                    Ya esta registrado <a href="#">Iniciar?</a>
                </p>
            </form>
        );
    }
}