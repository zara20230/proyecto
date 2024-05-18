import React, { useState } from 'react';
import './Login.js';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  return (
    <div className="login-container">
      <h1>{isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label>
              Nombre:
              <input type="text" name="name" required />
            </label>
          </div>
        )}
        <div>
          <label>
            Correo Electrónico:
            <input type="email" name="email" required />
          </label>
        </div>
        <div>
          <label>
            Contraseña:
            <input type="password" name="password" required />
          </label>
        </div>
        <button type="submit">{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</button>
      </form>
      <button onClick={handleToggle} className="toggle-button">
        {isLogin ? 'Crear una cuenta nueva' : 'Ya tengo una cuenta'}
      </button>
    </div>
  );
};

export default Login;