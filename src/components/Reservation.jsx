import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault(); // Evita que el formulario se envíe usando el comportamiento predeterminado del navegador al darle click en enviar
    try {
      const { data } = await axios.post( // Solicitud POST al endPoint "http://localhost:4000/api/v1/reservation/send"
        "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time }, // datos del formulario que pasan como segundo argumento 
        {
          headers: {   // Como  tercer argumento se pasan las opciones de la solicitud
            "Content-Type": "application/json", // Se especifica el tipo de contenido de la solicitud es JSON 
          },
          withCredentials: true, // Se especifica que se enviaran Cookies junto a la solicitud, para permitir el intercambio de cookies entre frontend y backend
        }
      );
      toast.success(data.message); // si es exitosa la solicitud se muestra el mensaje y se restablecen los valores de los useState del formulario 
      setFirstName("");
      setLastName("");
      setEmail("");
      setDate("");
      setTime("");
      setPhone("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form action="">
              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              {/* <div>
                <input
                  type="date"
                  placeholder="Fecha"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Hora"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div> */}
                <div>
        <label htmlFor="date">Fecha reserva:</label>
        <input
          type="date" // Tipo "date" para el input de fecha
          id="date"
          name="date"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
          required // Campo requerido
        />
      </div>
      <div>
        <label htmlFor="time">Hora reserva</label>
        <input
          type="time" // Tipo "time" para el input de hora
          id="time"
          name="time"
          value={time}
          onChange={(e)=> setTime(e.target.value)}
          required // Campo requerido
        />
      </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleReservation}>
                  RESERVE NOW{" "}
                  <span>
                    <HiOutlineArrowNarrowRight />
                  </span>
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
