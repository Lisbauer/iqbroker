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
  const [clienteCheckbox, setClienteCheckbox] = useState(""); // Cambiado el nombre del estado
  const [clienteSelect, setClienteSelect] = useState(""); // Nuevo estado para el campo de selección
  const [checkboxError, setCheckboxError] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    if (!nombre || !numero || !email || !mensaje || (!clienteCheckbox && !clienteSelect))  {
      setError(true);
      setEnviado(false);
      setCheckboxError(true);
      return;
    }

    setCheckboxError(false);

    const cliente = clienteCheckbox || clienteSelect;

    const emailParams = {
      from_name: nombre,
      phone_number: numero,
      client: cliente,
      email: email,
      message: mensaje,
      checkbox_option: clienteCheckbox,
    };

    emailjs
      .send(
        "service_vpkx5yq", // Reemplaza con tu SERVICE ID
        "template_0n6s87j", // Reemplaza con tu TEMPLATE ID
        emailParams,
        "RKirZCWg-9Ylts7fn" // Reemplaza con tu USER ID (PUBLIC KEY)
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
      <div className="form_container" data-aos="fade-down">
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


          <div className="checkbox_inputs">
            <div className="box_checkbox_input">
            <input
                type="checkbox"
                name="seguroOption"
                value="Quiero un seguro para mí"
                checked={clienteCheckbox === "Quiero un seguro para mí"}
                onChange={() => setClienteCheckbox("Quiero un seguro para mí")}
                className={checkboxError ? "error-checkbox" : ""}
              />
                <p>Quiero un seguro para mí</p>
            </div>
            <div className="box_checkbox_input">
            <input
                type="checkbox"
                name="seguroOption"
                value="Soy Productor/a de seguros"
                checked={clienteCheckbox === "Soy Productor/a de seguros"}
                onChange={() => setClienteCheckbox("Soy Productor/a de seguros")}
                className={checkboxError ? "error-checkbox" : ""}
              />
                <p>Soy productor/a de seguros</p>
            </div>
          </div>



          <select
            className="select_client"
            name="cliente"
            value={clienteSelect}
            onChange={(e) => setClienteSelect(e.target.value)}
            style={{
              border: error && !clienteCheckbox && !clienteSelect ? "red 1px solid" : "transparent",
            }}
          >
            <option value="" disabled hidden>
              Compañía de interés
            </option>
            <option value="Todas">Todas</option>
            <option value="Experta Seguros">Experta Seguros</option>
            <option value="SMG Seguros">SMG Seguros</option>
            <option value="Providencia Seguros">Providencia Seguros</option>
            <option value="HDI Seguros">HDI Seguros</option>
            <option value="Mercantil Andina">Mercantil Andina</option>
            <option value="ATM Seguros">ATM Seguros</option>
            <option value="Según la oferta comercial">
              Según la oferta comercial
            </option>
          </select>
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
          )}{" "}
          <section className="contact_footer">
            <div>
              <a
                href="https://www.google.com/maps/place/401+W+Broadway,+New+York,+NY+10012,+EE.+UU./@40.7243764,-74.0044765,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2598c159af05f:0x33a0750bb4a0d4d5!8m2!3d40.7243724!4d-74.0019016!16s%2Fg%2F11c1h6_b4w?entry=ttu"
                target="_blank"
              >
                <img src="./images/location.png" alt="location image" />
              </a>
              <h3>Direccion</h3>
              <h4 className="contact_subtittle">
                Alberdi 1112, Guaymallén
                <br />
                Mendoza
              </h4>
            </div>
            <div>
              <img src="./images/celphone.png" alt="celphone image" />
              <h3>Telefono</h3>
              <h4 className="contact_subtittle">1-800-222-000</h4>
            </div>
            <div>
              <a href="mailto:info@iqbrokers.com.ar">
                {" "}
                <img src="./images/email.png" alt="email image" />
              </a>
              <h3>E-MAIL</h3>
              <h4 className="contact_subtittle">
                administracion@iqbroker.com.ar
              </h4>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
