import {useEffect, useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


function Success() {

  const [contDawn, setContDown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeOutId = setInterval(() => {
      setContDown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeOutId);
          navigate("/")
        }
        return preCount -1;
      });
    },1000)
    return () => clearInterval(timeOutId)
  }, [navigate])
 
  return (
    <>
    <section className="notFound">
      <div className="container">
        <h1 className="titulo-reserva">¡¡Se ha completado tu Reserva!!</h1>
        {/* <img src="/sandwich.png" alt="success" /> */}
        <h2 className="titulo-redireccion">Redireccionando a la pagina principal en {contDawn} seconds...</h2>
        <Link to={"/"}>
          Volver a la pagina principal <HiOutlineArrowNarrowRight/>
        </Link>
      </div>
    </section>
    </>
  )
}

export default Success
