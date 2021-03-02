import React, { Component } from "react";
import '../assets/css/bootstrap.min.css'
import '../assets/css/Login.css'

export default class Login extends Component {
    render() {
        localStorage.setItem('status', true);
        localStorage.setItem('userEmail', 'alex@gmail.com');
        localStorage.setItem('userPassword', 'asd1357');
        localStorage.setItem('userName', 'Juan');
        localStorage.setItem('userLast', 'Perez Lopez');
        localStorage.setItem('userCellphone', '6677553311');
        localStorage.setItem('userURLPricture', 'https://i.ibb.co/NW3n48x/iphone-12-pro-graphite-hero.png');

        const status = localStorage.getItem('status');
        const userEmail = localStorage.getItem('userEmail');
        const userPassword = localStorage.getItem('userPassword');
        const userName = localStorage.getItem('userName');
        const userLast = localStorage.getItem('userLast');
        const userCellphone = localStorage.getItem('userCellphone');
        const userURLPricture = localStorage.getItem('userURLPricture');

        return (
            <form className="login-form">
                <h3>Iniciar Sesión</h3>

                <br />

                <div className="form-group">
                    <label>Correo electrónico</label>
                    <input type="email" className="form-control" placeholder="Escriba su correo electrónico" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Escriba su contarseña" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Iniciar</button>

                <br />

                <p className="forgot-password text-right">
                    Olvido su <a href="#">contraseña?</a>
                </p>
            </form>
        );
    }
}
