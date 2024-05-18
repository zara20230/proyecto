import "../App.css";
import React from "react";

function Contact() {
  return (
    <div className="form_container_contact">
      <div className="form_header">
        <h1 className="form_title">Nuestros Clientes</h1>
      </div>
      <div className="form_body">
        <div className="form">
          <label className="form_label">NOMBRES Y APELLIDOS:</label>
          <div className="form_input-ico">
            <i className="fa fa-user form_ico" aria-hidden="true"></i>
            <input
              className="form_input"
              id="nombre_apellidos"
              name="nombre_apellidos"
            ></input>
          </div>
        </div>
        <div className="form">
          <label className="form_label">Describir pregunta:</label>
          <div className="form_input-ico">
            <i className="fa fa-question-circle form_ico" aria-hidden="true"></i>
            <input
              className="form_input"
              id="describir_pregunta"
              name="describir_pregunta"
            ></input>
          </div>
        </div>
        <div className="form">
          <label className="form_label">Ingresar Correo:</label>
          <div className="form_input-ico">
            <i className="fa fa-envelope form_ico" aria-hidden="true"></i>
            <input className="form_input" id="correo" name="correo"></input>
          </div>
        </div>
        <div className="form">
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;