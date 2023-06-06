import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "Simar",
      password: "pass1",
    },
    {
      username: "Juan",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "usuario invalido",
    pass: "contraseña invalida",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="Error">{errorMessages.message}</div>
    );
    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Ingresa tu usuario nuevo</label>
              <input type="text" placeholder='Ej: Pedro' name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Ingresa tu correo</label>
              <input type="email" placeholder='Ej: peterparker@gmail.com' name="uname" required />
              {renderErrorMessage("email")}
            </div>
            <div className="input-container">
              <label>Ingresa tu contraseña</label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="input-container">
              <label>Confirmar contraseña</label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit"/>
            </div>
            
            
          </form>
        </div>
      );
  return (
    <>
      <div className="app">
        <div className="login-form">
          <div className="title">Registro</div>
          {isSubmitted ? <div>Se ha logeado correctamente</div> : renderForm}
        </div>
      </div>
    </>
  )
}

export default SignUp