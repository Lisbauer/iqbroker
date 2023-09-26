import React, { useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!nombre || !numero || !email || !mensaje) {
      setError(true);
      setEnviado(false);
      return;
    }

    const emailParams = {
      from_name: nombre,
      phone_number: numero,
      email: email,
      message: mensaje,
    };

    emailjs
      .send(
        "service_3h77yj4", // Reemplaza con tu SERVICE ID
        "template_7qfvucu", // Reemplaza con tu TEMPLATE ID
        emailParams,
        "c-8emIEBk9zCo1zHo" // Reemplaza con tu USER ID (PUBLIC KEY)
      )
      .then(
        (response) => {
          console.log("Correo electrónico enviado con éxito", response);
          setEnviado(true);
          setError(false);
        },
        (error) => {
          console.error("Error al enviar el correo electrónico", error);
          setEnviado(false);
          setError(true);
        }
      );
  };

  const handleNumeroChange = (e) => {
    const inputValue = e.target.value;
    const validInput = inputValue.replace(/[^0-9+]/g, "");
    setNumero(validInput);
  };

  return (
    <div className="contact_section">
      <div className="form_container">
        <h2>CONTACTANOS</h2>
        <div className="textfields_container">
          <input
            type="text"
            placeholder="Nombre y apellido"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              border: error && !nombre ? "red 1px solid" : "transparent",
            }}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              border: error && !nombre ? "red 1px solid" : "transparent",
            }}
          />
          <input
            type="text"
            placeholder="Numero telefonico"
            name="numero"
            value={numero}
            onChange={handleNumeroChange}
            style={{
              border: error && !numero ? "red 1px solid" : "transparent",
            }}
          />
          <input
            type="text"
            id="input_message"
            name="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Mensaje"
            style={{
              border: error && !mensaje ? "red 1px solid" : "transparent",
            }}
          />
          <input type="submit" id="input_submit" onClick={sendEmail} />{" "}
          {error && (
            <p
              style={{
                color: "red",
                margin: "0",
                fontWeight: "300",
                fontFamily: "'Nizzoli', Arial, sans-serif",
              }}
            >
              Por favor complete todos los campos.
            </p>
          )}
          {enviado && !error && (
            <p
              style={{
                color: "green",
                margin: "0",
                fontWeight: "300",
                fontFamily: "'Nizzoli', Arial, sans-serif",
              }}
            >
              Mensaje enviado.
            </p>
          )}
        </div>
      </div>
      <section className="contact_footer">
        <div>
          <img src="./images/location.png" alt="location image" />
          <h3>Direccion</h3>
          <h4>401 Broadway, 24th Floor <br /> New York, NY 10013.</h4>
        </div>
        <div>
          <img src="./images/celphone.png" alt="celphone image" />
          <h3>Telefono</h3>
          <h4>1-800-222-000</h4>
        </div>
        <div>
          <img src="./images/email.png" alt="email image" />
          <h3>E-MAIL</h3>
          <h4>info@iqbrokers.com.ar</h4>
        </div>
      </section>
    </div>
  );
};

export default Contact;
